import { RecipeIngredientAttributes } from '../../models/RecipeIngredient'
import { RecipeTechniqueAttributes } from '../../models/RecipeTechnique'
import { mergeIngredientsAttributes, mergeTechniquesAttributes } from './mapper'
import { Context, Args } from './typings'

interface IngredientsParent {
  ingredients: {
    RecipeIngredient: RecipeIngredientAttributes
  }[]
}

interface TechniquesParent {
  techniques: {
    RecipeTechnique: RecipeTechniqueAttributes
  }[]
}

export default {
  async ingredients(parent: IngredientsParent, args: Args, { service }: Context) {
    const ingredientIds = parent.ingredients.map((ingredient)=> {
      return ingredient.RecipeIngredient.ingredientId!
    })

    const ingredients = await service.ingredient.find({id: ingredientIds})
    return mergeIngredientsAttributes(parent.ingredients.map(i => i.RecipeIngredient), ingredients.data)
  },

  async techniques(parent: TechniquesParent, args: Args, { service }: Context) {
    const techniquesIds = parent.techniques.map((technique)=> {
      return technique.RecipeTechnique.techniqueId
    })

    const techniques = await service.technique.find({id: techniquesIds})
    return mergeTechniquesAttributes(parent.techniques.map(t=> t.RecipeTechnique), techniques.data)
  },
  user(parent: any, args: Args, { service }: Context) {
    return service.user.find({id: parent.userId})
  },
}

