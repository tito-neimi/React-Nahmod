import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import ItemListConainer from './components/itemListConainer/itemListContainer';
import ItemDetailContainer from './components/iitemDetailContainer/itemDetailContainer';
import { CartDetail } from './components/cart/cartDetail/cartDetail';
import { CartProvider } from './context/cartContext';
import { Checkout } from './components/checkout/checkout';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
        <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListConainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListConainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartDetail/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<h1>404 Not found</h1>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;
