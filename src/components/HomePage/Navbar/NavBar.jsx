import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
} from "react-bootstrap";
import "./NavBar.css";
import { ImLocation2 } from "react-icons/im";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsCart4, BsMenuButtonWideFill } from "react-icons/bs";
import LocationModal from '../Modal/LocationModal'

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-class">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://res.cloudinary.com/dsu915vad/image/upload/v1634554707/DelIt/DelIt_1_ifxnrb.png"
              className="d-inline-block align-top img"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            {" "}
            <span>
              {" "}
              <BsMenuButtonWideFill />{" "}
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mr-auto">
              <Nav.Link href="#features" className="mr-1 pr-0 nav-link-class">
                <ImLocation2 className='svg_location '/>
              </Nav.Link>
              <LocationModal/>
            </Nav>
            <Nav>
            
            <Nav.Link className='mr-4'>
              <BiSearchAlt2 className='svg_icons'/>
              </Nav.Link>
            <Nav.Link className='mr-4'>
              <BsCart4 className='svg_icons'/>
              </Nav.Link>
            <Button
              variant="success"
              className="button-class mr-2"
            >
              Sign In
            </Button>
          
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
