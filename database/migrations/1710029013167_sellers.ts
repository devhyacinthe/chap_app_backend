import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'sellers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('password').notNullable()
      table.string('email').nullable()
      table.string('sex').nullable().defaultTo('Masculin')
      table.double('rating').nullable().defaultTo(0)
      table.string('birthday').nullable()
      table.string('phone_number').notNullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { precision: 6, useTz: true }).notNullable()
      table.timestamp('updated_at', { precision: 6, useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
