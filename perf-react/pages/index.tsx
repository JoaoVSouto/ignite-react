import * as React from 'react';
import type { NextPage } from 'next';

import { SearchResults } from '../components/SearchResults';

import styles from '../styles/Home.module.css';

type Results = {
  totalPrice: string;
  data: any[];
};

const Home: NextPage = () => {
  const [search, setSearch] = React.useState('');
  const [results, setResults] = React.useState<Results>({
    data: [],
    totalPrice: '',
  });

  async function handleSearch(event: React.FormEvent) {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`);
    const data = await response.json();

    const formatter = Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    const products = data.map((product: any) => ({
      ...product,
      priceFormatted: formatter.format(product.price),
    }));

    const totalPrice = formatter.format(
      data.reduce((total: number, product: any) => total + product.price, 0)
    );

    setResults({ totalPrice, data: products });
  }

  const addToWishlist = React.useCallback((id: number) => {
    console.log(id);
  }, []);

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

      <SearchResults
        results={results.data}
        totalPrice={results.totalPrice}
        onAddToWishlist={addToWishlist}
      />
    </>
  );
};

export default Home;
