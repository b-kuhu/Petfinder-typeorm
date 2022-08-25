import express from 'express';
import 'reflect-metadata';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';

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
    console.log(`app listening at ${port}`)
    app.use('/docs',swaggerUi.serve,swaggerUi.setup(swaggerDocs));
})
}               )
.catch((error)=>console.log(error));