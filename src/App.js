import { useRef, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Middlecomp from './component/Middlecomp';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let name=useRef()

  let[val,setVal]=useState();
  let handle=(e)=>{
    setVal(name.current.value)
  }

  return (  
    // <div className="App">
    //   <input type="text" ref={name}  />
    //   <button onClick={handle}>submit</button>
    //   <h1>{val}</h1>
    // </div>

   <BrowserRouter>
    <Routes>
     <Route path='/' element={<Navbar/>} />
     <Route path='/middlecomp' element={<Middlecomp/>} />
    </Routes>
   </BrowserRouter>

  
 
  );
}

export default App;
