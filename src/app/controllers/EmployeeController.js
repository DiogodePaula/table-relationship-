import Company from '../models/Company';
import Employee from '../models/Employee';
import EmployeeRole from '../models/EmployeeRole';
import Role from '../models/Role';
class EmployeeController {
  async index(req, res) {
    try {
      const employee = await Employee.findAll();

      return res.json({
        employee,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const {
        uid,
      } = req.params;
      const employee = await Employee.findByPk(uid, {
        attributes: ['uid', 'name', 'age', 'cpf'],
        include: [{

            model: Company,
            as: 'company',
            attributes: ['uid', 'name', 'branch', 'address'],
          },
          {
            model: EmployeeRole,
            as: 'role',
            attributes: ['role_uid'],
            include: [{
              model: Role,
              as: 'role_name',
              attributes: ['name'],
            }, ],
          },
        ],
      });

      return res.json({
        employee,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async store(req, res) {
    const transactiom = await Employee.sequelize.transaction();
    // transaction só se usa quando se sabe que vai ter mais de uma transação
    try {
      const employee = await Employee.create(req.body, {
        transaction: transaction,
      });

      const {
        roles
      } = req.body;

      await Promise.all(
        roles.map(async (role_uid) => {
          const role = await EmployeeRole.create({
            employee_uid: employee.uid,
            role_uid,
          }, {
            transaction: transactiom
          });
          return role;
        })
      );
      await transactiom.commit();
      return res.json(employee);

    } catch (error) {

      await transactiom.rollback();
      return res.json({
        error,
      });
    }
  }

  async update(req, res) {
    try {
      const {
        uid,
      } = req.params;
      const updated = await Employee.update(req.body, {
        where: {
          uid,
        },
      });

      if (!updated) {
        throw Error('Empregado não encontrado');
      }
      return res.json('DATA_UPDATE');
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async delete(req, res) {
    try {
      const {
        uid,
      } = req.params;

      const deleted = await Employee.destroy({
        where: {
          uid,
        },
      });

      return res.json({
        deleted,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }
}

export default new EmployeeController();