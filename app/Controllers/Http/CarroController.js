'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Carros = use('App/Models/Carro')
/**
 * Resourceful controller for interacting with carros
 */
class CarroController {
  /**
   * Show a list of all carros.
   * GET carros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const carros = await Carros.query()
    .with('marca')
    .with('combustivei')
    .with('cambio')    
    .fetch();
    return carros;
  }

  /**
   * Render a form to be used for creating a new carro. 
   * GET carros/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new carro.
   * POST carros
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      'nome',
      'modelo',
      'ano',
      'potencia_cv',
      'marca_id',
      'cambio_id',
      'combustivel_id',
      'img'
    ])
    const carro = await Carros.create(data);
    return carro
  }

  /**
   * Display a single carro.
   * GET carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const carro = await Carros.query()
    .with('marca')
    .with('combustivei')
    .with('cambio')    
    .where('id', params.id).first();
    return carro 
  }

  /**
   * Render a form to update an existing carro.
   * GET carros/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update carro details.
   * PUT or PATCH carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const carro = await Carros.findOrFail(params.id);
    const data = request.only([
      'nome',
      'modelo',
      'ano',
      'potencia_cv',
      'marca_id',
      'cambio_id',
      'combustivel_id',
      'img'
    ])
    carro.merge(data) 
    await carro.save()
    return carro
  }

  /**
   * Delete a carro with id.
   * DELETE carros/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const carro = await Carros.findOrFail(params.id)
    return await carro.delete()
  }
}

module.exports = CarroController
