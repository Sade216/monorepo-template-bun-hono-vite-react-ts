import { model, Schema } from "mongoose"
import type { IPost } from "../../interfaces"

  
const postModel = new Schema<IPost>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    text: { type: String, required: true },
    author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})
  
export const db_post = model<IPost>('User', postModel)