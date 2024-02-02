import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Sell(){
    return (
<Form>
<Form.Label htmlFor="item_name">Item name:</Form.Label>
      <Form.Control
        type="text"
        id="item_name"
      />
      <DropdownButton id="dropdown-basic-button" title="Select Category">
      <Dropdown.Item href="#/action-1">Electronics</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Household</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Clothing</Dropdown.Item>
    </DropdownButton>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Item Description:</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>
      <Form.Label>Enter a price:</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>£</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <Form.Label>Upload an image:</Form.Label>
      <InputGroup>
<Form.Control type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
</InputGroup>
<Button>Submit Item</Button>
    </Form>
    )
}