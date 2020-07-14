import React, { useState, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axios from 'axios';

import StockCard from '../components/StockCard';
import { AnimatedSpinner } from '../styles/components';
import { Container, SearchForm, ResultArea } from '../pagesStyles/styles';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const termField = useRef();

  function handleSearch(event) {
    event.preventDefault();

    if (term === '') {
      termField.current.focus();
      return;
    }

    setLoading(true);
    setResults([]);

    axios
      .get(`/api/search/${term}`)
      .then((response) => {
        setResults(response.data);
      })
      .catch(() => {
        toast.error('Ocorreu um erro ao realizar a busca');
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <Container>
      <h1>Monitore seus investimentos e acerte nas suas decisões</h1>

      <section>
        <h3>Pesquise uma ação</h3>
        <SearchForm onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Digite um nome, símbolo, etc"
            name="search"
            ref={termField}
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? <AnimatedSpinner /> : <FaSearch />}
          </button>
        </SearchForm>
      </section>
      {results.length > 0 && (
        <ResultArea>
          {results.map((item) => (
            <StockCard key={item.symbol} data={item} />
          ))}
        </ResultArea>
      )}
    </Container>
  );
}
