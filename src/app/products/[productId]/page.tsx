import React from "react";
type Params = {
  productId: string;
};

const ProductDetails = ({ params }: { params: Params }) => {
  // for specifying type you can write  :  `{params }: { params: { productId: string;} }`
  return (
    <div>
      <h1>ProductDetails - dynamic routes</h1>
      <p>Current product id is : {params.productId}</p>
    </div>
  );
};

export default ProductDetails;
