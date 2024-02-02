import Button from 'react-bootstrap/Button';
import { getItems } from '../utils/api';

export default function CategoryCard (props) {
    const {category, setItems} = props

    function handleClick(event){
        getItems().then((itemsData)=>{
            const filteredItems = itemsData.filter((item)=>{
                return item.category_name === event.target.innerText
            })
            setItems(filteredItems);
        })
    }

    return <Button onClick = {handleClick}>{category.category_name}</Button>
}