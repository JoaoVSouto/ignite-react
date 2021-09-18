import * as React from 'react';

type ProductItemProps = {
  product: {
    id: number;
    price: number;
    title: string;
  };
};

function ProductItemComponent({ product }: ProductItemProps) {
  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
    </div>
  );
}

export const ProductItem = React.memo(
  ProductItemComponent,
  (prevProps, nextProps) => Object.is(prevProps.product, nextProps.product)
);
