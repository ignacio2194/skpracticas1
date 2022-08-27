
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  const nameEcomerce = "Tienda x"
  return (
    <div className="App">
    <ItemListContainer  nameEcommerce ={nameEcomerce}/>
   
    <NavBar/>
 
    </div>
  );
}

export default App;
