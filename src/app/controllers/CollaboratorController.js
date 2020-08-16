import Collaborator from '../models/Collaborator';
import Position from '../models/Position';

class CollaboratorController {
  async index(req, res) {
    try {
      const collaborator = await Collaborator.findAll();

      return res.json({ collaborator });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const collaborator = await Collaborator.findByPk(uid, {
        attributes: ['uid'],
        include: {
          model: Position,
          as: 'position',
          attributes: ['uid', 'name'],
        },
      });
      return res.json({ collaborator });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const collaborator = await Collaborator.create(req.body);

      return res.json({ collaborator });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };
      return res.json({ response });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const updated = await Collaborator.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Company não encontrado');
      }
      return res.json('DATA_UPDATE');
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Collaborator.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new CollaboratorController();
