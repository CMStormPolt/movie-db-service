import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { createServer } from "http";
import express from "express";
import cors from "cors";

const port = 4000

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = createServer(app);

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "world",
  }
};

const startApolloServer = async(app, httpServer) => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    });
  
    await server.start();
    server.applyMiddleware({ app });
  }

startApolloServer(app, httpServer);

// httpServer.listen(port, ()=>{
//   console.log(`server is working at: localhost:${port}`)
// })

export default httpServer;