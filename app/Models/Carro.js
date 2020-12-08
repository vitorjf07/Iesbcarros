'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Carro extends Model {
    marca(){
        return this.belongsTo('App/Models/Marca')
    }
    combustivei(){
        return this.belongsTo('App/Models/Combustivei')
    }
    cambio(){
        return this.belongsTo('App/Models/Cambio')
    }

}

module.exports = Carro
