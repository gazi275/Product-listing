

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) return description;
  return description.slice(0, maxLength) + '...';
};

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4 transform hover:scale-105 transition-transform duration-300">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <h3 className="text-lg font-bold mt-2">{product.title}</h3>
      <p className="text-sm text-gray-600 my-2">
        {truncateDescription(product.description, 100)} {/* Adjust length as needed */}
      </p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
};

export default ProductCard;
