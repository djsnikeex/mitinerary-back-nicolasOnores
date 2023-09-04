import Itinerary from "../../models/itinerary.js";

export default async(req,res)=>{

    try{
        await Itinerary.updateOne({_id: req.params.id}, req.body)
        return res.status(201).json({
            success: true,
            message: 'updated!'
        })
        
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message: 'error'
        })
    }


}