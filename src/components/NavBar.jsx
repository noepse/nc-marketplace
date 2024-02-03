import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'

import Search from './Search';

export default function NavBar() {
  return (
    <>
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-start">
      <Nav className="me-auto" >

<Nav.Link href="/">Home</Nav.Link>
<Nav.Link href="/Items">Buy</Nav.Link>
<Nav.Link href="/sell">Sell</Nav.Link>
</Nav>
      <Navbar.Collapse className="justify-content-center">
        <Search />
      </Navbar.Collapse>
      </Navbar.Collapse>
      <Navbar.Collapse className="justify-content-end">
      <Nav.Link href="/"><FontAwesomeIcon icon={faBasketShopping} /></Nav.Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  </>
  );
}
