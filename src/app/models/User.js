import Sequelize, {
    Model,
} from 'sequelize';
import bcrypt from 'bcryptjs';

// se ter pelo menos um dado factível é necessário um id

class Company extends Model {
    static init(sequelize) {
        super.init({
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
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                validade: {
                    isEmail: true,
                },
            },
            password: {
                type: Sequelize.VIRTUAL,
            },
            password_hash: {
                type: Sequelize.STRING,
            },
        }, {
            sequelize,
        });

        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8); // vai criptografar a senha 8 vezes
            }
        });

        return this;
    }

    static associate(models) {

    }
}

export default Company;