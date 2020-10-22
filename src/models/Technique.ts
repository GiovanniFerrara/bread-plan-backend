import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface TechniqueAttributes {
  id: string
  key: string
  title: string
  description: string
  duration: number
  standardTemperature?: number
  videoLink?: string
  userId?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface TechniqueInstance
  extends Sequelize.Instance<TechniqueAttributes>, TechniqueAttributes {}

export const TechniqueFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes,
): Sequelize.Model<TechniqueInstance, TechniqueAttributes> => {
  const attributes: SequelizeAttributes<TechniqueAttributes> = {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(700),
      allowNull: false,
    },
    standardTemperature: {
      type: DataTypes.FLOAT,
    },
    videoLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.STRING,
    },
  };

  const Technique = sequelize.define<TechniqueInstance, TechniqueAttributes>('Technique', attributes, {
    tableName: 'Technique',
    freezeTableName: true,
  });

  Technique.associate = (models): void => {
    Technique.belongsToMany(models.Recipe, {
      through: models.RecipeTechnique,
      foreignKey: 'techniqueId',
      as: 'recipes',
      otherKey: 'recipeId',
    });
  };

  return Technique;
};
