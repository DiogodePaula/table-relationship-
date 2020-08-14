module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('collaborators', {
      uid: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.UUID,
      },
      company_uid: {
        type: Sequelize.UUID,
        references: {
          model: 'companies',
          key: 'uid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      employee_uid: {
        type: Sequelize.UUID,
        references: {
          model: 'employees',
          key: 'uid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      position_uid: {
        type: Sequelize.UUID,
        references: {
          model: 'positions',
          key: 'uid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('collaborators');
  },
};
