import {Routes, Route} from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import SignUpScreen from './pages/SignUpScreen'
import FavScreen from './pages/FavScreen'
import CartPage from './pages/CartPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'


function App() {
  return(
    <div className='font-ralewayFont'>
      <Routes>
        <Route path='/' element={<HomeScreen/>} ></Route>
        <Route path='/signup' element={<SignUpScreen/>}></Route>
        <Route path='/product' element={<ProductPage/>}></Route>
        <Route path='/fav' element={<FavScreen/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
