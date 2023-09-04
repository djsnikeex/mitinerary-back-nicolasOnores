import {Router} from 'express';
import cityRouter from './city.js';
import itineraryRouter from './itinerary.js';

let router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    
});


router.use('/cities', cityRouter);
router.use('/itineraries', itineraryRouter);



export default router;