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
  //   this.hasMany(models.Employee, {
  //     as: 'employee',
  //     foreignKey: 'employee_uid',
  //   });
  // }
}

export default Position;

// uma quarta tabela para relacionamento de tabelas
