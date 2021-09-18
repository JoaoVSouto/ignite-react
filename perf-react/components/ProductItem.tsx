import * as React from 'react';

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
};

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      <button type="button" onClick={() => onAddToWishlist(product.id)}>
        Add to wishlist
      </button>
    </div>
  );
}

export const ProductItem = React.memo(
  ProductItemComponent,
  (prevProps, nextProps) => Object.is(prevProps.product, nextProps.product)
);
