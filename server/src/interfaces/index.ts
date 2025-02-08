import type { Types } from "mongoose";

type author = Pick<IUser, '_id' | 'nick' | 'avatar'>

export interface IUser {
    _id: Types.ObjectId,
    nick: string,
    email: string,
    password: string,
    avatar?: string,
    posts: [],
}


export interface IPost {
    title: string,
    description: string,
    text: string,
    author: author,
}
