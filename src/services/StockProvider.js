import axios from 'axios';

import { getAlphaKey } from '../utils/api/helpers';

class StockProvider {
  constructor() {
    this.baseURL = process.env.ALPHA_URL;
  }

  search(term) {
    const params = {
      function: 'SYMBOL_SEARCH',
      keywords: term,
      apikey: getAlphaKey(),
    };
    return axios.get(this.baseURL, { params });
  }
}

export default new StockProvider();
