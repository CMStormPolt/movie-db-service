import { Schema, model } from 'mongoose';
import { Movie, MovieGenres, MovieActor } from '../../types/movies/index'

const movieMongoSchema = new Schema<Movie>({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    isInTheaters: { type: Boolean, required: true, default: false },
    genres: { type: [Number], required: true, enum:  MovieGenres, default: [],}, 
    stars: { type: [Schema.Types.ObjectId], required: true, default: [] },
    posters: { type: [{sourceId: String, url: String, deleteHash: String}], required: false, default: [] },
    createDate: { type: Date, required: true, default: Date.now}
  });

movieMongoSchema.index({name: 'text'});

const actorMongoSchema = new Schema<MovieActor>({
    name: { type: String, required: true },
});

export const MovieModel = model<Movie>('Movie', movieMongoSchema);

export const ActorModel = model<MovieActor>('Actor', actorMongoSchema);