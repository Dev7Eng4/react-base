import React, { Suspense } from 'react';

import { Await, useAsyncValue, useLoaderData } from 'react-router-dom';

const ProductDetail = () => {
  const { product } = useLoaderData() as any;
  // const  data = useAsyncValue()

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Await resolve={product}>{resolveHistory => <div>Product</div>}</Await>
    </Suspense>
  );
};

export default ProductDetail;
