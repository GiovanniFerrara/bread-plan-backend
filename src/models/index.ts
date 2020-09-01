import Sequelize from 'sequelize'
import { DBInterface } from '../typings/DbInterface'
import { IngredientFactory } from './Ingredient'
import { RecipeFactory } from './Recipe'
import { RecipeIngredientFactory } from './RecipeIngredient'
import { RecipeTechniqueFactory } from './RecipeTechnique'
import { TechniqueFactory } from './Technique'
import { getEnv } from '../helpers/getEnv'
import { Env } from '../typings/Env'

export const createModels = (sequelizeConfig: Env): DBInterface => {
  const { dialectOptions, logging } = sequelizeConfig[getEnv()]
  const sequelize = new Sequelize(process.env.DATABASE_URL!, { dialectOptions, logging })
  console.log(process.env.DATABASE_URL!)
  const db: DBInterface = {
    sequelize,
    Sequelize,
    Ingredient: IngredientFactory(sequelize, Sequelize),
    Recipe: RecipeFactory(sequelize, Sequelize),
    Technique: TechniqueFactory(sequelize, Sequelize),
    RecipeIngredient: RecipeIngredientFactory(sequelize, Sequelize),
    RecipeTechnique: RecipeTechniqueFactory(sequelize, Sequelize),
  }

  Object.keys(db).forEach((modelName) => {
    // @ts-ignore
    if (db[modelName].associate) {
      // @ts-ignore
      db[modelName].associate(db)
    }
  })

  return db
}
