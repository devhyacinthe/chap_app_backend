import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel } from '@ioc:Adonis/Lucid/Orm'



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
  public email: string

  @column()
  public sex: string

  @column()
  public birthday: string

  @column()
  public rating: number

  @column({ serializeAs: null })
  public password: string

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
