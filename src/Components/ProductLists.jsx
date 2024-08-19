import ProductCard from './ProductCard';

const ProductLists = ({ products, view }) => {
  console.log(products);
  return (
    <div
      className={`w-full md:w-3/4 ${
        view === 'grid'
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
          : 'flex flex-col space-y-6'
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} view={view} />
      ))}
    </div>
  );
};

export default ProductLists;