import City from "../../models/city.js";

async function read(req,res)
{
    let queries = {};
    if(req.query.city){
        queries.city = new RegExp(`^${req.query.city}`, 'i');
    }
   
    try {
        const cities = await City.find(queries)

        if(cities.length > 0) {
            return res.status(200).json({
                success: true,
                cities: cities
            })
        }

        return res.status(404).json({
            success: false,
            message: 'No se encontraron ciudades'
            
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Error al obtener ciudades'
        })
        
    }


        
    


}

async function readOne(req, res){
    try {
        const city = await City.findById(req.params.id)
        
        if(city){
            return res.status(200).json({
                success: true,
                city: city
            });
        }
        return res.status(404).json({
            success: false,
            message: 'City not found'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes: false,
            message: 'Internal server error'
        })
    } 
}

export {read, readOne};