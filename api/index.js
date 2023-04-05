const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/err.handler.js');

const app = express();
const port = process.env.PORT || 3000;

//para recivir informacion de tipo json que nos envian por post
app.use(express.json());


//para especificar que dominios unicamente se pueden conectar
const whitelist = ['http://localhost:8080/', 'https://railwail.com']
const options = {
  //validar si el origen esta en el whitelist lo dejo pasar
  origin: (origin, callback)=>{
    if(whitelist.includes(origin) || !origin){
      //si existe le digo que no hay error y le da acceso
      callback(null, true)
    } else {
      //si no existe
      callback(new Error('No permitido'))
    }
  }
}
//avilita cualquier dominio, es decir se puede acceder desde cualquier puerto o dominio
//mala practica si es privada pero si la api es publica normal
app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});


routerApi(app);

//manejo de errores con middlewares
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log('Mi port ' + port);
});
/*
https://platzi.com/clases/2485-backend-nodejs/41751-post-metodo-para-crear/ */
