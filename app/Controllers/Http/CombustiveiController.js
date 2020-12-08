'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
const Combustivei = use('App/Models/Combustivei')
/**
 * Resourceful controller for interacting with combustiveis
 */
class CombustiveiController {
  /**
   * Show a list of all combustiveis.
   * GET combustiveis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const combustivel = await Combustivei.all();
    return combustivel
  }

  /**
   * Render a form to be used for creating a new combustivei.
   * GET combustiveis/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new combustivei.
   * POST combustiveis
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only([
      "nome"
    ])
    const combustivel = await Combustivei.create(data);
    return combustivel
  }

  /**
   * Display a single combustivei.
   * GET combustiveis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const combustivel = await Combustivei.findOrFail(params.id);
    return combustivel 
  }

  /**
   * Render a form to update an existing combustivei.
   * GET combustiveis/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update combustivei details.
   * PUT or PATCH combustiveis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const combustivel = await Combustivei.findOrFail(params.id);
    const data = request.only([
      "nome"
    ])
    combustivel.merge(data) 
    await combustivel.save()
    return combustivel
  }

  /**
   * Delete a combustivei with id.
   * DELETE combustiveis/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const combustivel = await Combustivei.findOrFail(params.id)
    return await combustivel.delete()
  }
}

module.exports = CombustiveiController
