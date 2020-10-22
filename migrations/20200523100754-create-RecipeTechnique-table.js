module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable(
    'RecipeTechnique',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      recipeId: {
        type: Sequelize.UUID,
        references: {
          model: 'Recipe',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        primaryKey: true,
        allowNull: false,
      },
      techniqueId: {
        type: Sequelize.UUID,
        references: {
          model: 'Technique',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        primaryKey: true,
        allowNull: true,
      },
      idealTemperature: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      duration: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true,
      },
    },
    { freezeTableName: true, tableName: 'RecipeTechnique' },
  ),

  down: (queryInterface) => queryInterface.dropTable('RecipeTechnique'),
};
