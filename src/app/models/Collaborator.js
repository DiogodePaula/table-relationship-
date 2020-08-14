import Sequelize, { Model } from 'sequelize';

class Collaborator extends Model {
  static init(sequelize) {
    super.init(
      {
        uid: {
          primaryKey: true,
          allowNull: false,
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
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
          allowNull: false,
          references: {
            model: 'position',
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
    this.hasMany(models.Company, {
      as: 'company',
      foreignKey: 'company_uid',
    });
    this.hasMany(models.Employee, {
      as: 'employee',
      foreignKey: 'employee_uid',
    });
    this.hasMany(models.Position, {
      as: 'position',
      foreignKey: 'position_uid',
    });
  }
}

export default Collaborator;
