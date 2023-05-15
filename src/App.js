import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import ItemListConainer from './components/itemListConainer/itemListContainer';
import Filtros from './components/filtros/filtros';
import ItemDetailContainer from './components/iitemDetailContainer/itemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Filtros/>
        <Routes>
          <Route path='/' element={<ItemListConainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListConainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path='*' element={<h1>404 Not found</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
