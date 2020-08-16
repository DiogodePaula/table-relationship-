import Employee from '../models/Employee';
import Position from '../models/Position';

class PositionController {
  async index(req, res) {
    try {
      const position = await Position.findAll();

      return res.json({ position });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const position = await Position.findByPk(uid, {
        attributes: ['uid', 'name'],
        include: {
          model: Employee,
          as: 'employee',
          attributes: ['uid', 'name', 'age', 'cpf'],
        },
      });

      return res.json({ position });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const position = await Position.create(req.body);

      return res.json(position);
    } catch (error) {
      return res.json({ error });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Position.update(req.body, { where: { uid } });

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

      const deleted = await Position.destroy({ where: { uid } });

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new PositionController();
