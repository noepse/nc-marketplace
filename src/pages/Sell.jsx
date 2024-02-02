import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { postItemToSell } from "../utils/api";
import { useState } from "react";

export default function Sell() {
  const [formInputs, setFormInputs] = useState({
    category_name: "Select Category",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
    postItemToSell(formInputs)
    .then(() => {
      console.log("form submitted")
    })
  }

  function handleDropDown(event) {
    setFormInputs((currentForm) => {
      console.log(event, "CLICK");
      return { ...currentForm, category_name: event.target.innerText };
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label htmlFor="item_name">Item name:</Form.Label>
      <Form.Control
        value={formInputs.item_name}
        onChange={(event) => {
          setFormInputs((currentForm) => {
            return { ...currentForm, item_name: event.target.value };
          });
        }}
        type="text"
        id="item_name"
      />
      <DropdownButton
        id="dropdown-basic-button"
        title={formInputs.category_name}
      >
        <Dropdown.Item onClick={handleDropDown} href="#/action-1">
          Electronics
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropDown} href="#/action-2">
          Household
        </Dropdown.Item>
        <Dropdown.Item onClick={handleDropDown} href="#/action-3">
          Clothing
        </Dropdown.Item>
      </DropdownButton>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Item Description:</Form.Label>
        <Form.Control
          value={formInputs.description}
          onChange={(event) => {
            setFormInputs((currentForm) => {
              return { ...currentForm, description: event.target.value };
            });
          }}
          as="textarea"
          rows={4}
        />
      </Form.Group>
      <Form.Label>Enter a price:</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text>£</InputGroup.Text>
        <Form.Control
          value={formInputs.price}
          onChange={(event) => {
            setFormInputs((currentForm) => {
              return { ...currentForm, price: Number(event.target.value) };
            });
          }}
          type="number"
          aria-label="Amount (to the nearest dollar)"
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <Form.Label htmlFor="item_name">Image URL:</Form.Label>
      <Form.Control
        value={formInputs.img_url}
        onChange={(event) => {
          setFormInputs((currentForm) => {
            console.log({ ...currentForm, img_url: event.target.value });
            return { ...currentForm, img_url: event.target.value };
          });
        }}
        type="text"
        id="img_url"
      />

      {/* <Form.Label>Upload an image:</Form.Label>
      <InputGroup>
<Form.Control type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
</InputGroup> */}
      <Button type="submit">Submit Item</Button>
    </Form>
  );
}
