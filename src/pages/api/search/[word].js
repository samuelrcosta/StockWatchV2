import StockProvider from '../../../services/StockProvider';
import { searchFilter } from '../../../utils/api/responseFilters';

export default async (req, res) => {
  const {
    query: { word },
  } = req;

  try {
    const results = await StockProvider.search(word);

    res.json(searchFilter(results.data));
  } catch (err) {
    res.statusCode = 500;
    res.json({ message: 'Erro ao buscar os dados' });
  }
};
