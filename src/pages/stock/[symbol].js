import React from 'react';
import { useRouter } from 'next/router';

import { Container } from '../../pagesStyles/stock/styles';

function Stock() {
  const router = useRouter();
  const { symbol } = router.query;

  return (
    <Container>
      <h1>{symbol}</h1>
      <h5>Coming soon!</h5>
    </Container>
  );
}

export default Stock;
