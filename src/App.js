import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sorting from './components/Sorting';
import { useState } from 'react';

function App() {
  
  const getRandom = () =>{
    return Math.random() * (475 - 30) + 30;
  }
  
  const getNewArray = () =>{
    let x = [];
    for( let i=0; i<65; i++ ){
      x.push( Math.floor(getRandom()) );
    }
    return x;
  }

  const [arr, setArr ] = useState(getNewArray());
  
  const handleGenerateArray = ()=>{
    setArr(getNewArray());
  }
  const handleUpdateArray = ( vec )=>{
    setArr(vec);
  }

  return (
   <div className='bg-dark'>
    {/* <Navbar title='Sorting Techniques Visualizer'/> */}
    <Sorting  array={arr} generate={handleGenerateArray} update={handleUpdateArray}/> 
    <Footer />
   </div>
  );
}

export default App;
