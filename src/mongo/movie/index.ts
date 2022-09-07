import { Schema, model } from 'mongoose';
import { Movie, MovieGenres, MovieActor } from '../../types/movies/index'

const movieMongoSchema = new Schema<Movie>({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    isInTheaters: { type: Boolean, required: true, default: false },
    genres: { type: [Number], required: true, enum:  MovieGenres, default: [],}, 
    stars: { type: [Schema.Types.ObjectId], required: true, default: [] },
    posterUrl: { type: String, required: false, default: "" },
    createDate: { type: Date, required: true, default: Date.now}
  });

movieMongoSchema.index({name: 'text'});

const actorMongoSchema = new Schema<MovieActor>({
    name: { type: String, required: true },
});

export const MovieModel = model<Movie>('Movie', movieMongoSchema);

export const ActorModel = model<MovieActor>('Actor', actorMongoSchema);