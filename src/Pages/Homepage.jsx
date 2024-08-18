import { useEffect, useState } from 'react';
import Header from '../Components/Header'
import axios from 'axios';
import ThemeToggle from './../Components/ThemeToggle';
import ProductLists from '../Components/ProductLists';

const Homepage = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>
        {axios.get('https://fakestoreapi.com/products')
    .then(response=>setProducts(response.data))
    .catch(error=>console.error('API Error:', error))
    },[])
    console.log(products);
    return (
        <div className="container mx-auto p-4">
          <div className='flex justify-between'>
            <Header/>
            <ThemeToggle/>
          </div>
          <div>
          <ProductLists products={products} />
          </div>
        </div>
    );
};

export default Homepage;