import React, { useEffect } from 'react';
import TodoFeature from './feature/Todo';
import AlbumFeature from './feature/Album';
import { Route } from 'react-router-dom';
import Heading from './component/Header';
import productApi from './api/productApi';
import Footer from './component/Footer';
import Content from './component/Content';


function App() {

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await productApi.getAll();
      console.log(productList);
    }
    fetchProducts();
  }, []);

  return (
    <div className="App">
      <Heading />

      <Route path='/album' component={AlbumFeature} />

      <Route path='/todo' component={TodoFeature} />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
