import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export const dynamicParams = true; // default val = true

const generateStaticParams = async () => {
  const res = await fetch("http://localhost:4000/products");

  const products = await res.json();

  return products.map((product) => ({
    id: product.id,
  }));
};

const getProduct = async (id) => {
  const res = await fetch("http://localhost:4000/products/" + id, {
    next: {
      revalidate: 60, // use 0 to opt out of using cache
    },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

// Change the page Metadata
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);

  return {
    title: `${product.name} | E-Commerce`,
    description: product.description,
  };
}

const ProductScreen = async ({ params }) => {
  const product = await getProduct(params.id);

  return (
    <main>
      <div className="mb-2 font-semibold">
        <Link href="/" className="flex">
          <ArrowUturnLeftIcon
            className="h-[1.6rem] w-[1.6rem] mr-1 text-sky-700"
            stroke="currentColor"
          />
          Back To Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          />
        </div>

        <div className="md:col-span-2 flex justify-center">
          <ul className="w-[80%]">
            <li>
              <h1 className="text-xl my-3 truncate whitespace-normal">
                {product.name}
              </h1>
            </li>
            <li>
              <p className="truncate mb-2 whitespace-normal">
                Category: {product.category}
              </p>
            </li>
            <li>
              <p className="truncate mb-2 whitespace-normal">
                Brand: {product.brand}
              </p>
            </li>
            <li className="mb-2">
              <p>
                Rating: {product.rating} stars ({product.numReviews} reviews)
              </p>
            </li>
            <li>
              <p className="truncate mb-2 whitespace-normal">
                Description: {product.description}
              </p>
            </li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <div className="rounded-lg shadow-md p-4">
            <ul>
              <li className="grid grid-cols-1 md:grid-cols-3 mb-2">
                <p className="md:col-span-2">Price</p>
                <p className="md:col-span-1">${product.price}</p>
              </li>
              <li className="grid grid-cols-1 md:grid-cols-3 mb-2">
                <p className="md:col-span-2">Status</p>
                <p className="md:col-span-1">
                  {product.countInStock ? "In Stock" : "Unavailable"}
                </p>
              </li>
              <li>
                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">
                  Add To Cart
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductScreen;
