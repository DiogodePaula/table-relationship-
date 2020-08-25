module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('employee_roles', {
      employee_uid: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'employees',
          key: 'uid',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      role_uid: {
        type: Sequelize.UUID,
        primaryKey: true,
        references: {
          model: 'roles',
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
    await queryInterface.dropTable('employee_roles');
  },
};