const boom = require('@hapi/boom');

//funcion para validar el schema de joi
//le pasamos el esque y la propiedad para encontrar la informacion
function validatorHandler(schema, property){
  return (req, res, next) => {
    const data = req[property];
    //{abortEarly: false}: busca todos los errore y los envia todos juntos
    const {error} = schema.validate(data, {abortEarly: false});

    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler

