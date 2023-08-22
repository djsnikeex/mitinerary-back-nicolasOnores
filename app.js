import 'dotenv/config.js';
import './config/database.js'
import createError  from 'http-errors';
import express  from 'express';
import path from 'path';
import cookieParser  from'cookie-parser';
import logger  from 'morgan';
import cors from 'cors';


import indexRouter from './routes/index.js';
import cityRouter from './routes/city.js';


import {__dirname} from './util.js';


const app = express(); 
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(logger('dev'));
app.use(cors());

app.use('/api', indexRouter) 

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})


export default app;
