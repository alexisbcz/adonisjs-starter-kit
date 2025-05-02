import { DateTime } from 'luxon'
import { BaseModel as AdonisBaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { cuid } from '@adonisjs/core/helpers'

export default class BaseModel extends AdonisBaseModel {
  @column({ isPrimary: true })
  declare id: string

  @beforeCreate()
  static async assignId(model: BaseModel) {
    model.id = cuid()
  }

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
