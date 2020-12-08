'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Helpers = use('Helpers')
const Route = use('Route')


Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.resource('/cambios', 'CambioController').apiOnly()
Route.resource('/combustiveis', 'CombustiveiController').apiOnly()
Route.resource('/marcas', 'MarcaController').apiOnly()
Route.resource('/carros', 'CarroController').apiOnly()


 