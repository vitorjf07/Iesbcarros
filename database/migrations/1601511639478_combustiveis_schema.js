'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CombustiveisSchema extends Schema {
  up () {
    this.create('combustiveis', (table) => {
      table.increments()
      table.string('nome', 80).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('combustiveis')
  }
}

module.exports = CombustiveisSchema
