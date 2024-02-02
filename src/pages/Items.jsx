import ItemCard from "../components/ItemCard";
import Container from 'react-bootstrap/Container';
import Categories from "./Categories";

export default function Items(props) {
const {items, setItems} = props
  return (  
  <Container>
    <Categories setItems = {setItems}/>
    <h2>All Items</h2>
    <ul>{items.map((item)=>{
      return <ItemCard key = {item.item_id} item = {item}/>
    })}
      </ul>
  </Container>)
}
