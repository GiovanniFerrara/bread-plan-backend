import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface RecipeTechniqueAttributes {
  id: string
  recipeId?: string
  techniqueId: string
  idealTemperature: number
  duration: number
  createdAt?: Date
  updatedAt?: Date
}

export interface RecipeTechniqueInstance
  extends Sequelize.Instance<RecipeTechniqueAttributes>,
    RecipeTechniqueAttributes {}

export const RecipeTechniqueFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes,
): Sequelize.Model<RecipeTechniqueInstance, RecipeTechniqueAttributes> => {
  const attributes: SequelizeAttributes<RecipeTechniqueAttributes> = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    recipeId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    techniqueId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    idealTemperature: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    duration: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  };
  const RecipeTechnique = sequelize.define<RecipeTechniqueInstance, RecipeTechniqueAttributes>(
    'RecipeTechnique',
    attributes,
    {
      tableName: 'RecipeTechnique',
      freezeTableName: true,
    },
  );

  return RecipeTechnique;
};
