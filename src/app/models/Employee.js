import Sequelize, { Model } from 'sequelize';

class Employee extends Model {
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
        age: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        cpf: {
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

  // static associate(models) {
  //   this.belongsTo(models.Company, {
  //     as: 'company',
  //     foreignKey: 'company_uid',
  //   });
  //   this.hasMany(models.Position, {
  //     as: 'position',
  //     foreignKey: 'uid',
  //   });
  // }
}

export default Employee;
