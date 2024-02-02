import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ItemCard (props) {
    const {item} = props
    return (
        <Card style={{ width: '10.5rem', padding: '10px '}}>
          <Card.Img variant="top" src={item.img_url} />
          <Card.Body>
            <Card.Title>{item.item_name}</Card.Title>
            <Card.Text>
              £{item.price}
            </Card.Text>
            <Button variant="primary">View info</Button>
          </Card.Body>
        </Card>
      );

}