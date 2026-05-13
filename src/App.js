import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Login from './components/Login';
import { getProducts } from './services/api';
import './App.css';

function App() {

  const [products, setProducts] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} />;
  }

  return (
    <div className="app">

      <Header />

      <div className="products-container">
        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        }
      </div>

    </div>
  );
}

export default App;
