'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CambiosSchema extends Schema {
  up () {
    this.create('cambios', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('cambios')
  }
}

module.exports = CambiosSchema
