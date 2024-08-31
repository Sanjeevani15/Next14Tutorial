import { notFound } from "next/navigation";
import React from "react";

const ReviewDetail = ({
  params,
}: {
  params: { productId: string; reviewId: string };
}) => {
  if (parseInt(params?.reviewId) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>
        This is the detail page from <br />
        product id: {params.productId} and review id is : {params.reviewId}
      </h1>
    </div>
  );
};

export default ReviewDetail;
