import { Schema, model } from 'mongoose';
import { movieInt, movieGenres, movieActor } from '../../types/movies/index'

const movieMongoSchema = new Schema<movieInt>({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    isInTheaters: { type: Boolean, required: true },
    genres: { type: [String], required: true, enum:  movieGenres},
    stars: { type: [Schema.Types.ObjectId], required: true },
    posterUrl: { type: String, required: false, default: "" },
    createDate: { type: Date, required: true, default: Date.now}
  });

movieMongoSchema.index({name: 'text'});

const actorMongoSchema = new Schema<movieActor>({
    name: { type: String, required: true },
});

export const MovieModel = model<movieInt>('Movie', movieMongoSchema);

export const ActorModel = model<movieActor>('Actor', actorMongoSchema);