import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';

import NotFound from '../pages/NotFound';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
