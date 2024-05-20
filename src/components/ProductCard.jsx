import React from "react";
import Link from "next/link";
function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} key={product.id} className="bg-white rounded-lg border-gray-800 mb-3">
      <div>{product.id}</div>
      <div>{product.name}</div>
      <div>{product.price}</div>
      <div>{product.description}</div>
    </Link>
  );
}

export default ProductCard;
