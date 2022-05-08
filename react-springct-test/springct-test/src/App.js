import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Add from "./pages/Add";

import View from "./pages/View";
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";


function App() {

   const LOCAL_STORAGE_KEY = 'student'
  const [data,setData] = useState([])

  const addUser=(value)=>{
    console.log(value)
    setData([...data,value])

  }
  useEffect(()=>{
    const retrieveItem = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

   if(retrieveItem) setData(retrieveItem )
  },[])

  useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(data))
  },[data])
  return <div className="App">


<Header/>
<Sidebar>
    <Routes>
   
      <Route path='/view' element={<View data={data} />} />
      <Route  path='/' element={<Add addUser={addUser}/>} />

    </Routes>

    
    </Sidebar>
 <Footer/>
  
  </div>;
}

export default App;
