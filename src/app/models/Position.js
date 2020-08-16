import Sequelize, { Model } from 'sequelize';
import Company from './Company';

class Position extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
        name: {
          allowNull: false,
          type: Sequelize.STRING,
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
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(Model.Employee, {
      foreignKey: 'employee_uid',
      through: 'positions',
      as: 'employee',
    });
  }
}

export default Position;

// uma quarta tabela para relacionamento de tabelas
