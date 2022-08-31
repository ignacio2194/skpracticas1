
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const nameEcomerce = "Tienda x"
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nameEcommerce={nameEcomerce} />


    </div>
  );
}

export default App;
