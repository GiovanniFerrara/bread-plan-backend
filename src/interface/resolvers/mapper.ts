import { IngredientAttributes } from "../../models/Ingredient"
import { RecipeIngredientAttributes } from "../../models/RecipeIngredient"
import { RecipeTechniqueAttributes } from "../../models/RecipeTechnique"
import { TechniqueAttributes } from "../../models/Technique"

export const mergeTechniquesAttributes = (target: RecipeTechniqueAttributes[], base: TechniqueAttributes[]): (TechniqueAttributes & RecipeTechniqueAttributes)[] => {
  return target.map(t => {
    const foundBase = base.find( b => b.id === t.techniqueId)
    return {...foundBase!, ...t}
  })
}

export const mergeIngredientsAttributes = (target: RecipeIngredientAttributes[], base: IngredientAttributes[]): (IngredientAttributes & RecipeIngredientAttributes )[] => {
  return target.map(t => {
    const foundBase = base.find( b => b.id === t.ingredientId)
    return {...foundBase!, ...t}
  })
}