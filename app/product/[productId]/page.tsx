import React from "react";

export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  return <h1>Details about the product {params.productId}</h1>;
}
