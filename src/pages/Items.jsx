import ItemCard from "../components/ItemCard";

export default function Items(props) {
const {items} = props
  return (  
  <>
    <p>These are the items</p>
    <ul>{items.map((item)=>{
      return <ItemCard key = {item.item_id} item = {item}/>
    })}
      </ul>
  </>)
}
