import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, HasMany, belongsTo, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Article from './Article'
import Locker from './Locker'
import Category from './Category'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: string


  @column()
  public name: string

  @column()
  public unitPrice: number

  @column()
  public stock: number

  @column()
  public imageUrl: string


  @column()
  public devise: string


  @column()
  public discount: number



  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime


  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @hasMany(() => Article)
  public articles: HasMany<typeof Article>


  @column()
  public lockerId: string

  @belongsTo(() => Locker)
  public locker: BelongsTo<typeof Locker>


  @column()
  public categoryId: string

  @belongsTo(() => Category)
  public category: BelongsTo<typeof Category>
}
