import Company from '../models/Company';

class CompanyController {
  async index(req, res) {
    try {
      const company = await Company.findAll();

      return res.json({ company });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const company = await Company.findByPk(uid, {
        attributes: ['uid', 'name', 'branch', 'address'],
      });

      return res.json({ company });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const company = await Company.create(req.body);

      return res.json({ company });
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
      const updated = await Company.update(req.body, { where: { uid } });

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
      const deleted = await Company.destroy({ where: { uid } });
      if (!deleted) {
        throw Error('Não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new CompanyController();
