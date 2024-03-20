import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Seller from './Seller'
import Customer from './Customer'
import Article from './Article'

export default class Invoice extends BaseModel {
  @column({ isPrimary: true })
  public id: string


  @column.dateTime()
  public orderDate: DateTime

  @column()
  public subTotal: number


  @column()
  public discount: number


  @hasMany(() => Article)
  public articles: HasMany<typeof Article>


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
