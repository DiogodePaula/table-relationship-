import Sequelize, { Model } from 'sequelize';

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
        company_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'companies',
            key: 'uid',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        employee_uid: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'employees',
            key: 'uid',
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Company, {
      as: 'company',
      foreignKey: 'company_uid',
    });
    this.hasMany(models.Employee, {
      as: 'employee',
      foreignKey: 'employee_uid',
    });
  }
}

export default Position;

// uma quarta tabela para relacionamento de tabelas
