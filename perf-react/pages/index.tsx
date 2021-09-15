import * as React from 'react';
import type { NextPage } from 'next';

import { SearchResults } from '../components/SearchResults';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState([]);

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    setResults(data);
  }

  return (
    <>
      <h1 className={styles.title}>Search</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />

        <button type="submit">Buscar</button>
      </form>

      <SearchResults results={results} />
    </>
  );
};

export default Home;
