import express from "express";
import cors from "cors";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { config } from "dotenv";

import { typeDefs } from '../src/schema/type-defs'
import { resolvers } from '../src/schema/resolvers'

config()

const app = express();
app.use(cors());
app.use(express.json());
const httpServer = createServer(app);

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

if(process.env.environment === 'dev'){
  const { port } = process.env
  httpServer.listen(port, ()=>{
    console.log(`server is working at: localhost:${port}`)
  })
}


export default httpServer;