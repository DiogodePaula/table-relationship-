import Sequelize, { Model } from 'sequelize';

class Company extends Model {
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
        branch: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        address: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Employee, {
      foreignKey: 'company_uid',
      as: 'employees',
    });

    // this.hasMany(models.Role, {
    //   as: 'roles',
    //   foreignKey: 'company_uid',
    // });
  }
}

export default Company;
