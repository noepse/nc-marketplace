import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
  return (<Navbar expand="lg" className="bg-body-tertiary">
  <Container>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="./">Home</Nav.Link>
      <Nav.Link href="./">Sell</Nav.Link>
      <Nav.Link href="./">Profile</Nav.Link>
      <Nav.Link href="./">Basket</Nav.Link>
    </Nav>
  </Navbar.Collapse>
      {/* <ul>
        <li>
          <a href="./">Home</a>
        </li>
        <li>
          <a href="./">Sell</a>
        </li>
        <li>
          <a href="./">Profile</a>
        </li>
        <li>
          <a href="./">Basket</a>
        </li>
      </ul> */}
      </Container>
</Navbar>
  );
}
