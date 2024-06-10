import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.css'
import ProductCard from './service/products'
import { Routes, Route } from 'react-router-dom'
import ProductMain from './Components/ProductMain';
import ProductDetails from './Components/ProductDetails';
import AddProduct from './Components/AddProducts';

function App() {
  return (

    <div className='App'>
      <Header>
      </Header>
      <Routes>
        <Route path='/' element={<ProductMain></ProductMain>} >
        </Route>
        <Route path='/product'>
          <Route path=':id' element={<ProductDetails ></ProductDetails>}></Route>
        </Route>
        <Route path='/AddProduct' element={<AddProduct></AddProduct>}></Route>
      </Routes>

    </div>
  );
}

export default App;
