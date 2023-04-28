import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListConainer from './components/itemListConainer/itemListContainer';
import Filtros from './components/filtros/filtros';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListConainer bienvenida={"Bienvenido a Plis U"}/>
      <Filtros/>
    </div>
  );
}

export default App;
