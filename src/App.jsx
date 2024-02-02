import Categories from "./pages/Categories"
import Items from "./pages/Items"
import Home from "./pages/Home"
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

function App() {
const [items, setItems] = useState([]);

function getItems(){
  return axios
  .get('https://nc-marketplace-sem-2.onrender.com/api/items')
  .then((response) => {
    // handle success
    return response.data.items

  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
}

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
      <Route path="/categories" element={<Categories />} />
      <Route path="/items" element={<Items items = {items}/>} />
    </Routes>
    </>
  )
}

export default App
