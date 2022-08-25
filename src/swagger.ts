import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';


const options = {
    definition :{
        openapi :  '3.0.0',
        info:{
            title:'Petfinder ',
            description : 'rest apis using typeorm',
            version:'1.0.0',
        },
    },
    apis:['./routes/*.ts'],
}
const spec = swaggerJsdoc(options)

function swaggerDocs(app,port){
//Swagger Page
app.use('/docs',swaggerUi.serve,swaggerUi.setup(spec))
    
//Documentation in JSON format 
  app.get('/docs.json',(req,res)=>{
      res.setHeader('Content-Type','application/json')
      res.send(spec)
  })
 

}
export default swaggerDocs;