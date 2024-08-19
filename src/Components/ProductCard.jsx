import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const truncateDescription = (description, maxLength) => {
  if (description.length <= maxLength) return description;
  return description.slice(0, maxLength) + '...';
};

const ProductCard = ({ product, view }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className={`relative dark:bg-gray-900 border p-4 rounded-lg shadow-lg mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-100 hover:z-10 dark:hover:bg-gray-600 ${
        view === 'list' ? 'flex' : ''
      }`}
    >
      <div className={`overflow-hidden rounded-lg ${view === 'list' ? 'w-1/4 mr-4' : ''}`}>
        <img
          src={product.image}
          alt={product.title}
          className={`${
            view === 'list' ? 'h-full' : 'w-full h-80'
          } object-fill transition-transform duration-500 hover:scale-110`}
        />
      </div>
      <div className={view === 'list' ? 'flex-1' : ''}>
        <h3 className="text-lg font-bold mt-4 transition-opacity duration-300 opacity-80 hover:opacity-100 dark:text-white">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 my-2 dark:text-white">
          {truncateDescription(product.description, 100)}
        </p>
        <p className="font-bold mb-2 dark:text-white">${product.price}</p>
        <div className="flex items-center">
          <FaStar className="text-yellow-500" />
          <span className="ml-1 dark:text-white">{product.rating.rate}</span>
          <span className="text-gray-600 ml-2 dark:text-white">({product.rating.count} reviews)</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;