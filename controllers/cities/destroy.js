import City from "../../models/City.js";

export default async(req,res)=>{

    try{
        await City.deleteOne({_id: req.params.id})
        return res.status(201).json({
            success: true,
            message: 'deleted!'
        })
        
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message: 'error'
        })
    }


}