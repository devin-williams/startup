import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Data from './components/Data';
import Realtime from './components/Realtime';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/data" element={<Data />} />
      <Route path="/realtime" element={<Realtime />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;