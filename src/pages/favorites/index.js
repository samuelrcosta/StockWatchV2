import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import StockCard from '../../components/StockCard';
import {
  Container,
  LoadingBlock,
  ResultArea,
} from '../../pagesStyles/favorites/styles';

function favorites() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('/api/favorites')
      .then((response) => {
        setList(
          response.data.map((item) => ({
            ...item,
            favorite: true,
          }))
        );
        setLoading(false);
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao carregar os favoritos');
      });
  }, []);

  if (loading) {
    return (
      <Container>
        <LoadingBlock />
      </Container>
    );
  }

  return (
    <Container>
      <h1>Favoritos</h1>

      {list.length === 0 && <div>Nenhuma ação adicionada nos favoritos.</div>}
      {list.length > 0 && (
        <ResultArea>
          {list.map((item) => (
            <StockCard key={item.symbol} data={item} />
          ))}
        </ResultArea>
      )}
    </Container>
  );
}

export default favorites;
