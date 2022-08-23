import * as  express from 'express';
import 'reflect-metadata';
//import entities

import { myDataSource } from './appDataSource';
import indexRoutes from './routes/index';

myDataSource.initialize()
.then(()=>{

 const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/',indexRoutes);


app.listen(3000);
console.log('Listening to the server on port', 3000);
}               )
.catch((error)=>console.log(error));