import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'invoices'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.timestamp('order_date', { useTz: true }).notNullable(),
      table.bigint('discount').notNullable(),
      table.bigint('sub_total').notNullable(),
      table.uuid('seller_id').references('id').inTable('sellers').onDelete('CASCADE')
      table.uuid('customer_id').references('id').inTable('customers').onDelete('CASCADE')
      table.unique(['seller_id', 'customer_id'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
