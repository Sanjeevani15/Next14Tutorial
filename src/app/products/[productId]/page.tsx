import { Metadata } from "next";
import React from "react";

type Params = {
  params: {
    productId: string;
  };
};

// Dynamic Metadata
export const generateMetadata = ({ params }: Params): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetails = ({ params }: Params) => {
  // for specifying type you can write  :  `{params }: { params: { productId: string;} }`
  return (
    <div>
      <h1>ProductDetails - dynamic routes</h1>
      <p>Current product id is : {params.productId}</p>
    </div>
  );
};

export default ProductDetails;
