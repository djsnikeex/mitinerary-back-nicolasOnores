import {Router} from 'express';
import cityRouter from './city.js';
import itineraryRouter from './itinerary.js';
import userRouter from './user.js';
import authRouter from './auth.js';

let router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    
});


router.use('/cities', cityRouter);
router.use('/itineraries', itineraryRouter);
router.use('/users', userRouter);
router.use('/auth', authRouter);




export default router;