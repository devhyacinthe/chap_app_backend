import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Seller from 'App/Models/Seller'
import CreateSellerValidator from 'App/Validators/CreateSellerValidator'
import LoginSellerValidator from 'App/Validators/LoginSellerValidator'
import UpdateSellerValidator from 'App/Validators/UpdateSellerValidator'

export default class SellersController {

  public async create({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CreateSellerValidator)
      const exist = await Seller.findBy('phone_number', payload.phoneNumber)
      console.log(exist)
      if (!exist) {
        const seller = await Seller.create(payload)
        await seller.save()
        return response.status(201).json(seller)
      } else {
        return response.status(400).json({ message: 'Phone Number already exist!' })
      }
    } catch (error) {
      response.unauthorized('Failed register')
    }
  }

  public async login({ auth, request, response }: HttpContextContract) {
    try {
      const { phoneNumber, password } = await request.validate(LoginSellerValidator)
      return await auth.use('api').attempt(phoneNumber, password)
    } catch (error) {
      response.json(error)
    }
  }

  public async logout({ auth, response }: HttpContextContract) {
    try {
      await auth.logout()
      return response.status(200).json({ message: 'User have been logged out!' })
    } catch (error) {
      response.unauthorized('Failed logout')
    }
  }

  public async sellerProfile({ response, params }: HttpContextContract) {
    try {
      const seller = await Seller.findByOrFail('phone_number', params.phoneNumber)
      return seller
    } catch (error) {
      response.json(error)
    }
  }

  public async updatedSellerProfile({ request, response, params }: HttpContextContract) {
    try {
      const payload = await request.validate(UpdateSellerValidator)
      const seller = await Seller.findByOrFail('phone_number', params.phoneNumber)
      await seller
        .merge({
          firstName: payload.firstName,
          lastName: payload.lastName,
          password: payload.password,
          sex: payload.sex,
          email: payload.email,
          birthday: payload.birthday,
        })
        .save()
      response.json({ message: 'Seller profile updated!' })
    } catch (error) {
      response.unauthorized('Failed to update seller profile!')
    }
  }



}
