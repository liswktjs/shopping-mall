import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';

const CustomRouter = () => {
  return (
    <Routes>
      <Route path={'/home'} element={<Home />} />
    </Routes>
  );
};

export default CustomRouter;
