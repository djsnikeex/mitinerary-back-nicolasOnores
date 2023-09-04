import { Schema,
            model,
            Types
 } from "mongoose";

 let collection = "cities";

    let schema = new Schema({
        city: {type: String, required: true},
        country: {type: String, required: true},
        image: {type: String, required: true},
        itineraries: [{type: Types.ObjectId, ref: "itineraries"}]
        
    },
    {
        timestamps: true});

        let City = model(collection, schema);

        export default City;



    