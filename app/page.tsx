import Searchbar from "@/components/Searchbar"
import Image from "next/image"
import { getAllProducts } from "@/lib/actions"
import ProductCard from "@/components/ProductCard"

const Home = async () => {
  const allProducts = await getAllProducts();

  return (
    <>
      <section className="px-6 md:px-20 py-24">
  <div className="flex flex-col justify-center">
    <p className="small-text">
      Smart Shopping Starts Here:
      <Image 
        src="/assets/icons/arrow-right.svg"
        alt="arrow-right"
        width={16}
        height={16}
      />
    </p>

    <h1 className="head-text">
      Unleash the Power of
      <span className="text-primary"> ProductOwl</span>
    </h1>

    <p className="mt-6">
      Track Your Amazon Products with <span className="text-primary"> ProductOwl</span>
    </p>
    <Searchbar />
  </div>
</section>


      <section className="trending-section">
        <h2 className="section-text">Searched Products</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home