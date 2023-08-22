import {Router} from 'express';
import cityRouter from './city.js';
let router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    
});


router.use('/cities', cityRouter);



export default router;