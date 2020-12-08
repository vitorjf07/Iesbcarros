'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CarrosSchema extends Schema {
  up () {
    this.create('carros', (table) => {
      table.increments()
      table.string('nome', 80).notNullable()
      table.string('modelo', 80).notNullable()
      table.date('ano', 80)
      table.integer('potencia_cv')
      table.integer('marca_id').unsigned().notNullable().references('id').inTable('marcas').onUpdate('cascade').onDelete('cascade')
      table.integer('cambio_id').unsigned().notNullable().references('id').inTable('cambios').onUpdate('cascade').onDelete('cascade')
      table.integer('combustivel_id').unsigned().notNullable().references('id').inTable('combustiveis').onUpdate('cascade').onDelete('cascade')
      table.text('img').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('carros')
  }
}

module.exports = CarrosSchema
