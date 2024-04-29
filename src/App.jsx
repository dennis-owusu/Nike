import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Gallery from './pages/Gallery'
import Customer from './pages/Customer'
import FooterComp from './components/FooterComp'
import ShopPage from './pages/ShopPage'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/customer' element={<Customer/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
    </Routes>
    <FooterComp/>
    </BrowserRouter>
    </>
  )
}

export default App
