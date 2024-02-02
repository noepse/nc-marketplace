import ItemCard from "../components/ItemCard";
import Categories from "../components/Categories";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';

export default function Items(props) {
const {items, setItems} = props
const { category_name } = useParams()
  return (  
    <main id = "items">
    <Categories setItems = {setItems}/>
    <Navbar className="bg-body-primary">
      <Container>
        <Navbar.Brand >{category_name ? `${category_name}` : `All Items`}</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
<div id="itemsContainer">
{items.map((item)=>{
  return <ItemCard key = {item.item_id} item = {item}/>
})}
</div>
    </main>
  )
}
