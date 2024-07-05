import { Product } from "@/types";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProcuctCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProcuctCardProps) => {
  return (
    <Link className="product-card" href={`/products/${product._id}`}>
      <div className="product-card_img-container">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className="product-card_img"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h3 className="product-title">{product.title}</h3>
        <div className="flex justify-between">
          <div className="text-black opacity-50 text-lg capitalise">
            <p className="text-black opacity-50 text-lg capitalise">
              {product.category}
            </p>
            <p>
              <span>{product?.currency}</span>
              <span>{product?.currentPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
