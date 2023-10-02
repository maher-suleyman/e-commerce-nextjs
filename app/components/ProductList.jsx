import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
