import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

import { Container } from './styles';

function StockCard({ data }) {
  function handleFavorite() {
    console.log('Coming Soon!');
  }

  return (
    <Container>
      <div className="header">
        <div>
          <div className="name">{data.name}</div>
          <div className="symbol">{data.symbol}</div>
        </div>
        <button type="button" onClick={handleFavorite}>
          <FaStar />
        </button>
      </div>
      <div className="body">
        <p>Região: {data.region}</p>
        <p>Moeda: {data.currency}</p>
        <p>Timezone: {data.timezone}</p>
        <p>
          Horário: {data.marketOpen} - {data.marketClose}
        </p>
      </div>
      <div className="footer">
        <Link href="/stock/[symbol]" as={`/stock/${data.symbol}`}>
          <a>Explorar Detalhes</a>
        </Link>
      </div>
    </Container>
  );
}

StockCard.propTypes = {
  data: PropTypes.shape({
    symbol: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    region: PropTypes.string,
    marketOpen: PropTypes.string,
    marketClose: PropTypes.string,
    timezone: PropTypes.string,
    currency: PropTypes.string,
    matchScore: PropTypes.string,
  }).isRequired,
};

export default StockCard;
