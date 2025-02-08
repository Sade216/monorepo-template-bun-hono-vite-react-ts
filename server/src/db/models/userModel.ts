import { model, Schema } from "mongoose"
import type { IUser } from "../../interfaces"

const userModel = new Schema<IUser>({
    _id: { type: Schema.Types.ObjectId},
    nick: { type: String, required: true },
    email: { type: String, required: true },
    avatar: { type: String },
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
})
  
export const db_user = model<IUser>('User', userModel)