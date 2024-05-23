import React from 'react';
import Header from './components/Header';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import { SearchScreen } from './screens/SearchScreen';
import "./style.css"
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<SearchScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
