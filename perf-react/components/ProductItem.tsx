import * as React from 'react';
import dynamic from 'next/dynamic';

import type { AddProductToWishlistProps } from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist),
  {
    loading: function LoadingAddProductToWishlist() {
      return <div>Loading...</div>;
    },
  }
);

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: string;
  };
  onAddToWishlist: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = React.useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button type="button" onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = React.memo(
  ProductItemComponent,
  (prevProps, nextProps) => Object.is(prevProps.product, nextProps.product)
);
