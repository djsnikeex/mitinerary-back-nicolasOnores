import { Schema, model, Types  } from "mongoose";


let collection = "itineraries";

    let schema = new Schema({

        title: {type: String, required: true},
        price: {type: Number, required: true},
        duration: {type: Number, required: true},
        rating: {type: Number, required: true},
        hashtags: {type: Array, required: true},
        cityId: {type: Types.ObjectId, ref: "cities", required: true},
        userId: {type: Types.ObjectId, ref: "users"},
        image: {type: String, required: true},
        comments: [{type: Types.ObjectId, ref: "comments"}],
        activities: [{type: Types.ObjectId, ref: "activities"}]



    },
    {
        timestamps: true});

        let Itinerary = model(collection, schema);

        export default Itinerary;
