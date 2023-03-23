import { Routes, Route } from 'react-router-dom';
import { URL } from '../constant';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';
import ProductDetail from '../Pages/ProductDetail';

const CustomRouter = () => {
  return (
    <Routes>
      <Route path={URL.HOME} element={<Home />} />
      <Route path={`${URL.PRODUCT_DETAIL}/:id`} element={<ProductDetail />} />
      <Route path={URL.NOT_FOUND} element={<NotFound />} />
    </Routes>
  );
};

export default CustomRouter;
