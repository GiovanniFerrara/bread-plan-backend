const ingredientTypeDef = `
type Ingredient {
  id: ID!
  user: User
  title: String
  imageSrc: String
  key: String
  description: String
  createdAt: String
  updatedAt: String
  recipes: [Recipe]
}

input IngredientPayloadInput{
  title: String!
  userId: String!
  key: String!
  description: String
  imageSrc: String
} 

input RecipeIngredientInput {
  id: ID!
  amount: Float!
}

type IngredientInRecipe {
  id: ID!
  amount: Float!
}
`;
export { ingredientTypeDef as default };
