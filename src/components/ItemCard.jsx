import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCard (props) {
    const {item} = props
    console.log(item)
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.img_url} />
          <Card.Body>
            <Card.Title>{item.item_name}</Card.Title>
            <Card.Text>
              {item.description}
              {item.price}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      );

}