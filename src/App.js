import './App.css';
import Navbar from './comp/Navbar';
import Text from './comp/Text';
import React, {useState} from 'react'

function App() {
  const[myOne,setMyOne] = useState({
    color: "black",
    backgroundColor: "white",
  })

  const target= ()=>{
    if(myOne.color === "black"){
      setMyOne({
        color: "white",
        backgroundColor: "black",
        document: document.title = "DarkMode",
      })
    }
    else{
      setMyOne({
        color: "black",
        backgroundColor: "white",
        document: document.title = "TextUtils",
      })
    }
  }

    
  return (
    <>
    <Navbar title="TextUtils" target={target}></Navbar>
    <div className="container my-4">
      <Text heading="Make your own Contant" myOne={myOne}></Text>
    </div>
    </>
  );
}

export default App;
