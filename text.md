## dependencias de -D
npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D

## dependenciasd de produccion
npm i express

## dependencia que permite generar datos falsos
//instalar la version sin ningun problema de seguridad
npm i @faker-js/faker

## dependecia para menejo de errores
npm i @hapi/boom

## dependencia para validar datos o schemas
npm i joi
//page joi
https://joi.dev/

##
npm i cors

## ## ## ##
validar endpoins: se valida en 
product router, dentro se requiere el validate-handler que valida si el error es tipo boom y busca todos los errores
luego requerimos product.schema
donde se valida con join los datos
