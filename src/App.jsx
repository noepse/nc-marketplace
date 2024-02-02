import {getItems} from "./utils/api.js"
import Items from "./pages/Items"
import Home from "./pages/Home"
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Sell from "./pages/Sell.jsx";

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // currently viewedItems
const [items, setItems] = useState([]);

useEffect(()=>{
  getItems().then((data)=>{
    setItems(data)
  });
}, [])

  return (
    <>
      <Header />
      <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/items" element={<Items items = {items} setItems = {setItems}/>} />
      <Route path="/sell" element={<Sell/>} />
    </Routes>
    </>
  )
}

export default App
