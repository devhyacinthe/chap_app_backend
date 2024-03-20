import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'articles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary().defaultTo(this.db.rawQuery('uuid_generate_v4()').knexQuery)
      table.uuid('invoice_id').references('id').inTable('invoices').onDelete('CASCADE')
      table.uuid('product_id').references('id').inTable('products').onDelete('CASCADE')
      table.unique(['invoice_id', 'product_id'])
      table.bigint('unit_price').notNullable(),
      table.bigint('total').notNullable(),
      table.bigint('quantity').notNullable(),
      table.bigint('total_stock').notNullable(),
      table.bigint('global_price').notNullable(),
      table.bigint('locker_remaining').notNullable(),

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
