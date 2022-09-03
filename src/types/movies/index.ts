import { Schema, model } from 'mongoose';
export interface movieInt {
    // id: number,
    name: string,
    year: number,
    isInTheaters: boolean,
    genres: [movieGenres],
    stars: [Schema.Types.ObjectId]
}

export enum movieGenres {
    THRILLER,
    ACTION,
    FANTASY,
    DRAMA
}

export interface movieActor {
    // id: number,
    name: string
}