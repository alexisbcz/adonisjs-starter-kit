/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('common/home')

const SignUpController = () => import('#auth/controllers/sign_up_controller')
router.get('/auth/sign_up', [SignUpController, 'show'])
router.post('/auth/sign_up', [SignUpController, 'handle'])

const SignInController = () => import('#auth/controllers/sign_in_controller')
router.get('/auth/sign_in', [SignInController, 'show']).as('auth.sign_in.show')
router.post('/auth/sign_in', [SignInController, 'handle'])

const SignOutController = () => import('#auth/controllers/sign_out_controller')
router.post('/auth/sign_out', [SignOutController, 'handle'])

const ForgotPasswordController = () => import('#auth/controllers/forgot_password_controller')
router
  .get('/auth/forgot_password', [ForgotPasswordController, 'show'])
  .as('auth.forgot_password.show')
router
  .post('/auth/forgot_password', [ForgotPasswordController, 'handle'])
  .as('auth.forgot_password.handle')

const ResetPasswordController = () => import('#auth/controllers/reset_password_controller')
router
  .get('/auth/reset_password/:email', [ResetPasswordController, 'show'])
  .as('auth.reset_password.show')
router
  .post('/auth/reset_password/:email', [ResetPasswordController, 'handle'])
  .as('auth.reset_password.handle')
