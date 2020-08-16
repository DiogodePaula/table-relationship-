import Employee from '../models/Employee';
import Company from '../models/Company';

class EmployeeController {
  async index(req, res) {
    try {
      const employee = await Employee.findAll();

      return res.json({ employee });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const employee = await Employee.findByPk(uid, {
        attributes: ['uid', 'name', 'age', 'cpf'],
        include: {
          model: Company,
          as: 'company',
          attributes: ['uid', 'name', 'branch', 'address'],
        },
      });

      return res.json({ employee });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const employee = await Employee.create(req.body);

      return res.json(employee);
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Employee.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Empregado não encontrado');
      }
      return res.json('DATA_UPDATE');
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;

      const deleted = await Employee.destroy({ where: { uid } });

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new EmployeeController();
