import City from "../../models/city.js";

async function create(req,res){

    try{
        let one = await City.create(req.body)
        return res.status(201).json({
            success: true,
            message: 'created!',
            data: one
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message: 'error'
        })
    }
}

export default create;