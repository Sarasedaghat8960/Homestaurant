import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainPart from './components/MainPart/MainPart';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const ApplicationID = "ac02a9fd";
  const ApplicationKey = "e6415acd08e580bf7ff0124a0435dfb8"	;
  const [search,setSearch]=useState("")
  const [receipts,setReceipts]=useState([]);
  //const search="chicken";
  const ApiUrl= `https://api.edamam.com/search?q=${search}&app_id=${ApplicationID}&app_key=${ApplicationKey}&imageSize=SMALL` 
  
  useEffect(()=>{
    fetch(ApiUrl)
   .then(res=>res.json())
   .then(result=> {console.log(result)})
  },[])
  console.log(search);
  return ( 
  <div>
    <Header/>
    <SearchBar search={search} setSearch={setSearch}/>
    <MainPart/>
    <Footer/>
    {console.log(search)}

</div>
   
  );
}

export default App;