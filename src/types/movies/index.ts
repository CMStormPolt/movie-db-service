import { Schema } from 'mongoose';
export interface Movie {
    // id: number,
    name: string,
    year: number,
    isInTheaters: boolean,
    genres: [MovieGenres],
    stars: [Schema.Types.ObjectId],
    posterUrl: string,
    createDate: Schema.Types.Date
}

export enum MovieGenres {
    THRILLER,
    ACTION,
    FANTASY,
    DRAMA
}

export interface MovieActor {
    // id: number,
    name: string
}