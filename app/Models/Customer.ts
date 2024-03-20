import { DateTime } from 'luxon'
import { BaseModel, HasMany, ManyToMany, column, hasMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import Invoice from './Invoice'
import Seller from './Seller'

export default class Customer extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public phoneNumber: string

  @column()
  public businessName: string

  @column()
  public name: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Address)
  public address: HasMany<typeof Address>


  @hasMany(() => Invoice)
  public invoice: HasMany<typeof Invoice>

  @manyToMany(() => Seller)
  public sellers: ManyToMany<typeof Seller>

}
