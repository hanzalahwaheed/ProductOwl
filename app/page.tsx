import React from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import HeroCarousel from "@/components/HeroCarousel";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();
  return (
    <>
      <section className="px-6 md:px-20 py-24 ">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <h1 className="head-text">
              Track your <span className="text-primary">Amazon</span> Products
              with <span className="text-primary">ProductOwl</span>
            </h1>
            <p className="mt-6">
              Buy stuff at the cheapest rate possible with{" "}
              <span className="text-red-500">ProductOwl</span>!
            </p>
            <SearchBar />
          </div>
          {/* <HeroCarousel /> */}
        </div>
      </section>

      {/* Trending Section */}
      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gay-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
