import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import Product from './pages/Product.jsx';
import ProductList from './pages/ProductList.jsx';
import Body from './pages/Body.jsx';
import Header from './pages/Header.jsx';



const App = () => {
  return (
    <div className="w-full min-h-screen justify-center flex items-center bg-[url('https://www.baronmiedzyzdroje.pl/wp-content/uploads/2019/04/background-1.png')] bg-no-repeat bg-cover">
    <div className='bg-white w-full h-screen md:w-[35vw] md:h-[60vh] '>
        <Header/>
        <Body/>
        
        
        </div>
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Comment method='post' />} />
          <Route path="/analytics" element={<Analytics method='get'/>} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </div>
  );
};

export de