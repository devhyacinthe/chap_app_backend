import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'
import Customer from './Customer'
import Invoice from './Invoice'




export default class Seller extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public phoneNumber: string

  @column()
  public email: string | null

  @column()
  public sex: string | null

  @column()
  public birthday: string | null

  @column()
  public rating: number | null

  @column({ serializeAs: null })
  public password: string


  @manyToMany(() => Customer)
  public customers: ManyToMany<typeof Customer>


  @hasMany(() => Address)
  public addresses: HasMany<typeof Address>


  @hasMany(() => Invoice)
  public invoices: HasMany<typeof Invoice>


  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime


  @beforeSave()
  public static async hashPassword (seller: Seller) {
    if (seller.$dirty.password) {
      seller.password = await Hash.make(seller.password)
    }
  }
}
