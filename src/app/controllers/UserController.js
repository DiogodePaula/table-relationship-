import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const { email } = req.body;
      const usersExist = await User.findOne({
        where: {
          email,
        },
      });

      if (usersExist) {
        throw Error('Usuário ja cadastrado');
      }

      const user = await User.create(req.body);

      return res.json({
        user,
      });
    } catch (error) {
      return res.json({
        error,
      });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const [updated] = await User.update(req.body, { where: { uid } });
    } catch (error) {}
  }
}

export default new UserController();
