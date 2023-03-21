import { Routes, Route } from 'react-router-dom';
import { URL } from '../constant';
import Home from '../Pages/Home';
import ProductDetail from '../Pages/ProductDetail';

const CustomRouter = () => {
  return (
    <Routes>
      <Route path={URL.HOME} element={<Home />} />
      <Route path={`${URL.PRODUCT_DETAIL}/:id`} element={<ProductDetail />} />
    </Routes>
  );
};

export default CustomRouter;
