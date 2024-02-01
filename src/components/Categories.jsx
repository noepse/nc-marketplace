import CategoryCard from "./CategoryCard";
import axios from 'axios';
import {useEffect, useState} from 'react';

export default function Categories() {

  const [categories, setCategories] = useState([])

    function getCategories () {
     return axios
  .get('https://nc-marketplace-sem-2.onrender.com/api/categories')
  .then((response) => {
    // handle success
    return response.data.categories

  })
  .catch((error) => {
    // handle error
    console.log(error);
  })
    }

    useEffect(()=>{
      getCategories().then((data)=>{
        setCategories(data)
      });
    }, [])

  return (
    <ul>
      <p>These are the categories</p>
      {categories.map((category)=>{
        return <CategoryCard key = {category.category_name} category={category}/>
      })}
    </ul>
  );
}
