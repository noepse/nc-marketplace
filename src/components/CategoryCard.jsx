import Button from 'react-bootstrap/Button';
import { getItems } from '../utils/api';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard (props) {
    const {category, setItems} = props
    const navigate = useNavigate();

    function handleClick(event){
        getItems().then((itemsData)=>{
            navigate(`/items/${category.category_name}`)
            const filteredItems = itemsData.filter((item)=>{
                return item.category_name === event.target.innerText
            })
            setItems(filteredItems);
        })
    }

    return <Button onClick = {handleClick} > {category.category_name}</Button>
}