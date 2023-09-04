import Itinerary from "../../models/itinerary.js";

async function readById(req,res){
    try{
        const itinerary = await Itinerary.findById(req.params.id)
        if(itinerary){
            return res.status(200).json({
                success: true,
                itinerary: itinerary
            });
        }
        return res.status(404).json({
            success: false,
            message: 'Itinerary not found'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            succes: false,
            message: 'Internal server error'
        });
    }
}

async function readAll(req, res) {
    let queries = {};
    if (req.query.city) {
        queries.city = new RegExp(`^${req.query.city}`, 'i');
    }

    try {
        const itineraries = await Itinerary.find(queries)

            

        if (itineraries.length > 0) {
            return res.status(200).json({
                success: true,
                itineraries: itineraries,
            });
        }

        return res.status(404).json({
            success: false,
            message: 'No se encontraron itinerarios',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error',
        });
    }
}


async function readByCity(req, res) {
   /*  let queries = {};
    if (req.query.city) {
        queries.city = new RegExp(`^${req.query.city}`, 'i');
    }

    try {
        const itineraries = await Itinerary.find(queries)

        if (itineraries.length > 0) {
            return res.status(200).json({
                success: true,
                itineraries: itineraries,
            });
        }

        return res.status(404).json({
            success: false,
            message: 'No se encontraron itinerarios',
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error al obtener itinerarios',
        });
    } */
}

export {readById, readAll, readByCity}
