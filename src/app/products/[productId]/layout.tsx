import React from "react";

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <h2 className="bg-yellow-200">Featured Products</h2>
    </>
  );
};

export default ProductLayout;
