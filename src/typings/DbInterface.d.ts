import * as Sequelize from 'sequelize';
import { IngredientAttributes, IngredientInstance } from '../models/Ingredient';
import { RecipeAttributes, RecipeInstance } from '../models/Recipe';
import { TechniqueAttributes, TechniqueInstance } from '../models/Technique';
import { UserAttributes, UserInstance } from '../models/User';
import { RecipeIngredientInstance, RecipeIngredientAttributes } from '../models/RecipeIngredient';
import { RecipeTechniqueInstance, RecipeTechniqueAttributes } from '../models/RecipeTechnique';

export interface DBInterface {
  sequelize: Sequelize.Sequelize
  Sequelize: Sequelize.SequelizeStatic
  Ingredient: Sequelize.Model<IngredientInstance, IngredientAttributes>
  Recipe: Sequelize.Model<RecipeInstance, RecipeAttributes>
  Technique: Sequelize.Model<TechniqueInstance, TechniqueAttributes>
  User: Sequelize.Model<UserInstance, UserAttributes>
  RecipeIngredient: Sequelize.Model<RecipeIngredientInstance, RecipeIngredientAttributes>
  RecipeTechnique: Sequelize.Model<RecipeTechniqueInstance, RecipeTechniqueAttributes>
}
