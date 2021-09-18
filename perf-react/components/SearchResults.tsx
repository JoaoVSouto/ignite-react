import * as React from 'react';

import { ProductItem } from './ProductItem';

type SearchResultsProps = {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
};

export function SearchResults({ results }: SearchResultsProps) {
  const totalPrice = React.useMemo(
    () =>
      Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(results.reduce((total, product) => total + product.price, 0)),
    [results]
  );

  return (
    <div>
      <h2>Total price: {totalPrice}</h2>

      {results.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
