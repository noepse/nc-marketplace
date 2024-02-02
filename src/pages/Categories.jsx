import CategoryCard from "../components/CategoryCard";
import { getCategories } from "../utils/api";
import {useEffect, useState} from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Categories(props) {
  const {setItems} = props

  const [categories, setCategories] = useState([])

    useEffect(()=>{
      getCategories().then((data)=>{
        setCategories(data)
      });
    }, [])

  return (
    <>
      <h2>Browse By Category</h2>
      <ButtonGroup aria-label="Basic example">
      {categories.map((category)=>{
        return (


            <CategoryCard key = {category.category_name} category={category} setItems = {setItems}/>
        )
      })}
      </ButtonGroup>
    </>
  );
}
