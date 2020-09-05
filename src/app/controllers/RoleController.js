import Role from '../models/Role';
import Company from '../models/Company';

class RoleController {
  async index(req, res) {
    try {
      const role = await Role.findAll({
        attributes: ['uid', 'name'],
        include: [
          {
            model: Company,
            as: 'company',
            attributes: ['uid', 'name'],
          },
        ],
      });

      return res.json({
        role,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const role = await Role.findByPk(uid, {
        attributes: ['uid', 'name'],
        include: [
          {
            model: Company,
            as: 'company',
            attributes: ['uid', 'name'],
          },
        ],
      });

      return res.json({
        role,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async store(req, res) {
    try {
      const role = await Role.create(req.body);

      return res.json(role);
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Role.update(req.body, {
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
      const { uid } = req.params;

      const deleted = await Role.destroy({
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

export default new RoleController();
