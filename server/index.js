import express from 'express';
import morgan from 'morgan';
import {PORT} from './config.js';
import indexRoutes from './routes/index.routes.js'
import dotenv from 'dotenv';
import cors from cors;

app.use(cors());
dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use('/api', indexRoutes);



app.listen(PORT)
console.log('Server listening on port ' + PORT);