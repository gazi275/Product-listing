import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const SingleProduct = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('API Error:', error));
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-700 dark:text-gray-300">Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-center items-center flex-col md:flex-row md:space-x-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full aspect-square object-fill rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">{product.title}</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{product.description}</p>

          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">${product.price}</span>
            <span className="text-sm text-gray-600 ml-2 dark:text-gray-400">
              ({product.rating.count} reviews)
            </span>
          </div>

          <div className="flex items-center mb-6">
            <FaStar className="text-yellow-500" />
            <span className="ml-1 text-lg text-gray-700 dark:text-gray-300">{product.rating.rate}</span>
          </div>
<Link to='/'>
<button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
            Home
          </button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;