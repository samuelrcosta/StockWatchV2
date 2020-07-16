import Validator from 'validatorjs';
import runMiddleware from '../../../utils/api/runMiddleware';
import Favorite from '../../../schemas/Favorite';
import databaseMiddleware from '../../../middlewares/database';

Validator.useLang('pt');

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, databaseMiddleware);

  if (req.method === 'GET') {
    const favorites = await Favorite.find({});
    res.json(favorites);
  } else if (req.method === 'PUT') {
    const rules = {
      symbol: 'required|string',
      name: 'required|string',
      type: 'required|string',
      region: 'required|string',
      marketOpen: 'required|string',
      marketClose: 'required|string',
      timezone: 'required|string',
      currency: 'required|string',
      matchScore: 'string',
    };

    const validation = new Validator(req.body, rules);

    if (validation.fails()) {
      res.status(422).json(validation.errors.all());
      return;
    }

    const favoriteStock = await Favorite.create(req.body);
    res.json(favoriteStock);
  } else {
    res.status(404).json({ message: 'Not found route' });
  }
}

export default handler;
