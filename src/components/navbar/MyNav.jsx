import { useContext } from 'react';
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const NavbarBook = () => {

  const {isDarkMode, toggleDarkMode} = useContext(ThemeContext)
  console.log("NAV:" + isDarkMode);

  return (
    <Navbar expand="lg" bg={isDarkMode ? "dark" : "light"} data-bs-theme={isDarkMode ? "dark" : "light"} >
      <Container>
        <Navbar.Brand href="#">EpicBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
          <Nav>
            <Button onClick={() => toggleDarkMode()} variant={isDarkMode ? "light" : "dark"}>
              {isDarkMode ? "LightTheme" : "DarkTheme"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBook;