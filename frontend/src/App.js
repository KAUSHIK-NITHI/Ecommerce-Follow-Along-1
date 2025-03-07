import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage,SignupPage,Home,CreateProduct,MyProducts,Cart} from './routes/route.js';
import ProductDetails from './pages/ProductDetails.jsx';
import Profile from './pages/profile.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/createproduct' element={<CreateProduct/>}></Route>
        <Route path='/create-product/:id' element={<CreateProduct/>}></Route>
        <Route path='/myproducts' element={<MyProducts/>}></Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/ProductDetails' element={<ProductDetails/>}/>
        <Route path='/profile' element={<Profile/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App