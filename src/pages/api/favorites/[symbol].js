import runMiddleware from '../../../utils/api/runMiddleware';
import databaseMiddleware from '../../../middlewares/database';
import Favorite from '../../../schemas/Favorite';

export default async (req, res) => {
  // Run the middleware
  await runMiddleware(req, res, databaseMiddleware);
  if (req.method === 'DELETE') {
    const {
      query: { symbol },
    } = req;

    try {
      await Favorite.findOneAndDelete({ symbol });
      res.status(200).json({ message: 'Favorito removido com sucesso!' });
    } catch (err) {
      res.status(500).json({ message: 'Erro ao remover o favorito' });
    }
  } else {
    res.status(404).json({ message: 'Not found route' });
  }
};
