import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Product from './Product'

export default class Locker extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public type: string


  @column()
  public capacity: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(() => Product)
  public products: HasMany<typeof Product>
}
