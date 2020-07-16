import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaStar } from 'react-icons/fa';

import { Container } from './styles';

function StockCard({ data }) {
  const [favorite, setFavorite] = useState(!!data.favorite);

  function handleFavorite() {
    if (favorite) {
      setFavorite(false);
      axios
        .delete(`/api/favorites/${data.symbol}`)
        .then(() => {})
        .catch(() => {
          toast.error('Ocorreu um erro ao remover a ação dos favoritos');
          setFavorite(true);
        });
    } else {
      setFavorite(true);
      axios
        .put('/api/favorites', { ...data })
        .then(() => {})
        .catch(() => {
          toast.error('Ocorreu um erro ao registrar a ação como favorita');
          setFavorite(false);
        });
    }
  }

  return (
    <Container>
      <div className="header">
        <div>
          <div className="name">{data.name}</div>
          <div className="symbol">{data.symbol}</div>
        </div>
        <button
          type="button"
          className={favorite ? 'active' : ''}
          onClick={handleFavorite}
        >
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
    favorite: PropTypes.bool,
  }).isRequired,
};

export default StockCard;
