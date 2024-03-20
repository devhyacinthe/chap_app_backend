import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Invoice from './Invoice'
import Product from './Product'

export default class Article extends BaseModel {
  @column({ isPrimary: true })
  public id: string


  @column()
  public unitPrice: number

  @column()
  public total: number


  @column()
  public quantity: number


  @column()
  public globalPrice: number

  @column()
  public totalStock: number

  @column()
  public lockerRemaining: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @column()
  public invoiceId: string

  @belongsTo(() => Invoice)
  public invoice: BelongsTo<typeof Invoice>


  @column()
  public productId: string

  @belongsTo(() => Product)
  public product: BelongsTo<typeof Product>
}
