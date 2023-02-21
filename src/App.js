
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Home from "./Components/Pages/Home/Home"
import Bebidas from './Components/Pages/Bebidas/Bebidas';
import ProductDetail from './Components/Pages/ProductDetail/ProductDetail';


function App() {
  return (

    <Router>
      <Navbar
        categoria1="Bebidas"
        categoria2="Accesorios"
        categoria3="Aperitivos"
      >
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bebidas" element={<Bebidas />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
