import { FaStar } from "react-icons/fa";


const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) return description;
  return description.slice(0, maxLength) + '...';
};

const ProductCard = ({ product }) => {
  return (
    <div className="relative border p-4 rounded-lg shadow-lg mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 hover:z-10">
    <div className="overflow-hidden rounded-lg">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-fill transition-transform duration-500 hover:scale-110"
      />
    </div>
    <h3 className="text-lg font-bold mt-4 transition-opacity duration-300 opacity-80 hover:opacity-100">
  {product.title}
</h3>
    <p className="text-sm text-gray-600 my-2">{truncateDescription(product.description, 100)}</p>
    <p className="font-bold mb-2">${product.price}</p>
    <div className="flex items-center">
      <FaStar className="text-yellow-500" />
      <span className="ml-1">{product.rating.rate}</span>
      <span className="text-gray-600 ml-2">({product.rating.count} reviews)</span>
    </div>
  </div>
  );
};

export default ProductCard;
