import React, { useRef, useState, useEffect } from 'react'
import { Routes, Route,Navigate } from 'react-router-dom'

import Test from './Components/pages/Test'
import Error404 from './Components/pages/Error404'
import Home from './Components/pages/Home'
import Settings from './Components/pages/Settings'
import ProdDtls from './Components/pages/ProdDtls'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import ReturnsRefunds from './Components/pages/ReturnsRefunds'
import ShippingPolicy from './Components/pages/ShippingPolicy'
import TermsConditions from './Components/pages/TermsConditions'
import Faq from './Components/pages/Faq'
import Guarantee from './Components/pages/Guarantee'
import PrivacyPolicy from './Components/pages/PrivacyPolicy'
import DiamondSetting from './Components/pages/DiamondSetting'
import ProdDiamond from './Components/pages/ProdDiamond'
import ProdRing from './Components/pages/ProdRing'
import Cart from './Components/pages/Cart'
import Wishlist from './Components/pages/Wishlist'
import Login from './Components/pages/Login'
import Registration from './Components/pages/Registration'
import Account from './Components/pages/Account'
import Header from './Components/parts/Header';
import Checkout from './Components/pages/Checkout'
import Success from './Components/pages/Success'
import Failure from './Components/pages/Failure'



function App() {
  const [cartitem, setCartItem] = useState([])
  const [updateItem, updateCartItem] = useState({index : "", item : ""})

  return (
    <>
    <Header cartitem={cartitem} setCartItem={setCartItem} updateItem={updateItem} updateCartItem={updateCartItem}></Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/settings-ring' element={<Settings />} />
      <Route path='/settings-diamond' element={<DiamondSetting />} />
      <Route path='/product-ring/:id' element={<ProdRing />} />
      <Route path='/product-diamond/:id' element={<ProdDiamond />} />
      <Route path='/product-details' element={<ProdDtls cartVal={cartitem} setCartItem={setCartItem} updateItem={updateItem} updateCartItem={updateCartItem}/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/account' element={<Account />} />
      <Route path='/registration' element={<Registration />} />
      <Route path='/wishlist' element={<Wishlist />} />
      <Route path='/cart' element={<Cart cartitem={cartitem} setCartItem={setCartItem} updateItem={updateItem} updateCartItem={updateCartItem}/>} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route path='/returns-n-refunds' element={<ReturnsRefunds />} />
      <Route path='/shipping-policy' element={<ShippingPolicy />} />
      <Route path='/t-n-c' element={<TermsConditions />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/guarantee' element={<Guarantee />} />
      <Route path='/test' element={<Test />} />
      <Route path='/test' element={<Test />} />
      <Route path='/success/:id' element={<Success cartitem={cartitem} setCartItem={setCartItem} />} />
      <Route path='/Failure/' element={<Failure />} />
      <Route path='*' element={<Navigate to="/" />} />
      {/* <Route path='about' element={<About />} /> */}
    </Routes>
    </>
  );
}

export default App;
