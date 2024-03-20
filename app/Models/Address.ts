import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Seller from './Seller'
import Customer from './Customer'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public latitude: string | null

  @column()
  public longitude: string | null

  @column()
  public town: string

  @column()
  public district: string

  @column()
  public country: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @column()
  public sellerId: string

  @belongsTo(() => Seller)
  public seller: BelongsTo<typeof Seller>


  @column()
  public customerId: string

  @belongsTo(() => Customer)
  public customer: BelongsTo<typeof Customer>
}
