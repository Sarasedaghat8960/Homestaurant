import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return ( 
        <div>
    <h1>Homestaurant</h1>
    <Header/>
    <SearchBar/>
    <MainPart/>
      <Footer/>


    </div>
   
  );
}

export default App;