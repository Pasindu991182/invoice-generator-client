import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import assets from './assets/assets.js';
import Menubar from './components/Menubar.jsx';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Dashboard from './pages/Dashbord.jsx';
import Mainpage from './pages/Mainpage.jsx';
import PreviewPage from './pages/PreviewPage.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashbord" element={<Dashboard />} />
        <Route path="/generate" element={<Mainpage />} />
        <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
