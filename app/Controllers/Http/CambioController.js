'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Cambios = use('App/Models/Cambio')
/**
 * Resourceful controller for interacting with cambios
 */
class CambioController {
  /**
   * Show a list of all cambios.
   * GET cambios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const cambios = await Cambios.all();
    return cambios
  }

  /**
   * Render a form to be used for creating a new cambio.
   * GET cambios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new cambio.
   * POST cambios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
      const data = request.only([
        "nome"
      ])
      const cambio = await Cambios.create(data);
      return cambio
  }

  /**
   * Display a single cambio.
   * GET cambios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
      const cambio = await Cambios.findOrFail(params.id);
      return cambio 
  }

  /**
   * Render a form to update an existing cambio.
   * GET cambios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update cambio details.
   * PUT or PATCH cambios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const cambio = await Cambios.findOrFail(params.id);
    const data = request.only([
      "nome"
    ])
    cambio.merge(data) 
    await cambio.save()
    return cambio
  }

  /**
   * Delete a cambio with id.
   * DELETE cambios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const cambio = await Cambios.findOrFail(params.id)
    return await cambio.delete()
  }
}

module.exports = CambioController
