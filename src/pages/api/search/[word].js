import runMiddleware from '../../../utils/api/runMiddleware';
import databaseMiddleware from '../../../middlewares/database';
import Favorite from '../../../schemas/Favorite';
import StockProvider from '../../../services/StockProvider';
import { searchFilter } from '../../../utils/api/responseFilters';

export default async (req, res) => {
  // Run the middleware
  await runMiddleware(req, res, databaseMiddleware);

  const {
    query: { word },
  } = req;

  try {
    const results = await StockProvider.search(word);
    const resultsData = searchFilter(results.data);
    const symbols = resultsData.map((item) => item.symbol);
    const favorites = await Favorite.find({ symbol: { $in: symbols } });

    const filtered = resultsData.map((item) => ({
      ...item,
      favorite: !!favorites.find((i) => i.symbol === item.symbol),
    }));

    res.json(filtered);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar os dados' });
  }
};
