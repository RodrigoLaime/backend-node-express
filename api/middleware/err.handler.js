//mostrar en consola los errores
function logErrors(err, req, res, next) {
  console.log('logErrors');
  console.error(err);
  next(err);
}

//devuelve el error
function errorHandler(err, req, res, next) {
  console.log('errorHandler');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

//devuelve el error, si es tipo boom
function boomErrorHandler(err, req, res, next) {
  //si es de tipo error
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  }
}


module.exports = { logErrors, errorHandler, boomErrorHandler }
