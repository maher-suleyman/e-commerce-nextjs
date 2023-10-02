import ProductList from "./components/ProductList";

const getProducts = async () => {
  const res = await fetch("http://localhost:4000/products", {
    next: {
      revalidate: 0, // use 0 to opt out of using cache
    },
  });

  return res.json();
};

const Home = async () => {
  const products = await getProducts();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
