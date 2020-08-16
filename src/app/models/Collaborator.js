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
    this.belongsTo(models.Position, {
      as: 'position',
      foreignKey: 'position_uid',
    });
  }
}

export default Collaborator;
