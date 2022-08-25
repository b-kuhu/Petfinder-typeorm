import * as  express from 'express';
import 'reflect-metadata';
import swaggerDocs from './swagger';

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


const port =3000
app.listen(port,()=>{
    console.log(`Example app listening at ${port}`)
    swaggerDocs(app,port)
})
}               )
.catch((error)=>console.log(error));