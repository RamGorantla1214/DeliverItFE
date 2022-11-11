import {Button, Modal, Form} from 'react-bootstrap'
import {useState} from 'react'
import { usePlacesWidget } from "react-google-autocomplete";
import './MapModal.css'
import { useDispatch} from 'react'

// import useOnclickOutside from 'react-cool-onclickoutside';

const options = {
    fields: ["address_components", "geometry", "icon", "name"],
    strictBounds: false,
    types: ["establishment"]
  };

const MapModal = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyCLKJPN2AwuEPInrV54tkLSqYb2WOOTM8A",
    onPlaceSelected: (place) => {
      console.log(place);
    },
    options
  });

//   Geocode.setApiKey('AIzaSyCJ_JRKA4QOfkfaEdM69ovi-irxdKIoA6M');

    return(
        <>
        <Form.Group>
        <Form.Control type="text" placeholder="Search pickup" onClick={handleShow}/>
        </Form.Group>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Set Pickup Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <Search content={'search an area, location name'}/> */}
            <div>
      <input ref={ref} style={{ width: "90%" }}  placeholder='search'/>
      {/* Render dropdown */}
    </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      
        </>
    )
}

export default MapModal