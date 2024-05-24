import React from 'react';
import Header from './components/Header';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import { SearchScreen } from './screens/SearchScreen';
import "./style.css"
import ProductScreen from './screens/ProductScreen';
import UploadExcel from './screens/UploadExcel';
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/upload" element={<UploadExcel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
