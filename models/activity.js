import { Schema, model, Types } from "mongoose";

let collection = "activities";

let schema = new Schema(
    {
        itineraryId: { type: Types.ObjectId, ref: "itineraries", required: true },
        activity: { type: String, required: true },
        image: { type: String, required: true },
    },
    {
        timestamps: true,
    }
    );

let Activity = model(collection, schema);

export default Activity;