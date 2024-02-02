import CategoryCard from "./CategoryCard";
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
    <section id = "categories">
      <ButtonGroup >
      {categories.map((category)=>{
        return (


            <CategoryCard key = {category.category_name} category={category} setItems = {setItems}/>
        )
      })}
      </ButtonGroup>
    </section>
  );
}
