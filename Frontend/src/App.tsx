import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id/:variantId" element={<ProductDetails />} />
      
    </Routes>
  )
}

export default App
