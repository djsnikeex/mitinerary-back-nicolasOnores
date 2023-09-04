import { Schema, model, Types } from "mongoose";

let collection = "comments";

let schema = new Schema(
    {
        itineraryId: { type: Types.ObjectId, ref: "itineraries", required: true },
        userId: { type: Types.ObjectId, ref: "users", required: true },
        comment: { type: String, required: true },
        userName: { type: String, required: true },
        userPic: { type: String, required: false },
    },
    {
        timestamps: true,
    }
    );

let Comment = model(collection, schema);

export default Comment;