import User from '#common/models/user'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import vine from '@vinejs/vine'

export default class SignUpController {
  async show({ inertia }: HttpContext) {
    return inertia.render('auth/sign_up')
  }

  @inject()
  async handle({ auth, request, response }: HttpContext) {
    const signUpValidator = vine.compile(
      vine.object({
        fullName: vine.string().trim().minLength(1).maxLength(255),
        email: vine
          .string()
          .email()
          .trim()
          .normalizeEmail()
          .unique(async (db, value) => {
            const userFoundByEmail = await db.from('users').where('email', value).first()
            return !userFoundByEmail
          }),
        password: vine.string().minLength(8),
      })
    )

    const payload = await request.validateUsing(signUpValidator)

    const user = await User.create({
      ...payload,
    })
    await auth.use('web').login(user)

    return response.redirect().toPath('/')
  }
}
