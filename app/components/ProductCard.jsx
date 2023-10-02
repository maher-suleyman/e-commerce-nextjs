import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  return (
    <div className="rounded-lg shadow-md p-4">
      <Link href={`/product/${product.id}`} title={product.name}>
        <Image
          src={product.image}
          alt={product.name}
          width="0"
          height="0"
          sizes="100vw"
          quality={100}
          // placeholder="blur"
          className="w-full h-auto object-cover rounded-md"
        />
      </Link>
      <div className="mt-2">
        <Link href={`/product/${product.id}`} title={product.name}>
          <p className="text-lg font-semibold">{product.name}</p>
        </Link>
        <p className="text-gray-500">${product.price}</p>
      </div>
      <div className="mt-4">
        <button className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
