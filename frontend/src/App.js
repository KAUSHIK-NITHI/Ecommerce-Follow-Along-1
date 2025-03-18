import React from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {LoginPage, SignupPage, Home, CreateProduct, MyProducts, Cart, ProductDetails, Profile,CreateAddress,OrderConfirmation} from './routes/route.js';

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
        <Route path='/profile' element={<Profile/>}/> </Routes>
        <Route path='/CreateAddress' element={<CreateAddress/>}></Route>
        <Route path='/OrderConfirmation' element={<OrderConfirmation/>}></Route>
      </BrowserRouter>
    </div>
  )
}

export default App