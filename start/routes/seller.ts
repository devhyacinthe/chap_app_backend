import Route from '@ioc:Adonis/Core/Route'


Route.group(() => {
  Route.post('/seller/auth/register', 'SellersController.create')
  Route.post('/seller/auth/login', 'SellersController.login')
  Route.get('/seller/auth/logout', 'SellersController.logout')

}).prefix('api/v1')

Route.group(() => {
  Route.get('/seller/profile/:phoneNumber', 'SellersController.sellerProfile')
  Route.put('/seller/:phoneNumber', 'SellersController.updatedSellerProfile')
})
  .prefix('api/v1')
  .middleware('auth')
