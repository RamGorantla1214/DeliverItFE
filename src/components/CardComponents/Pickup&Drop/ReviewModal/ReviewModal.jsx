import { Modal, Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./ReviewModal.css";
import getDistance from 'geolib/es/getDistance';
import Geocode from 'react-geocode'

const ReviewModal = (props) => {
  const address = useSelector((state) => state.address);

  const [pickupLat, setPickupLat] = useState()
  const [pickupLong, setPickupLong] = useState()
  const [dropLat, setDropLat] = useState()
  const [dropLong, setDropLong] = useState()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => {
    handleShow();
    props.handleDispatch();
  };

Geocode.setApiKey('AIzaSyCJ_JRKA4QOfkfaEdM69ovi-irxdKIoA6M')
Geocode.setLocationType('APPROXIMATE')


    Geocode.fromAddress(address).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setPickupLat(lat)
          setPickupLong(lng)
        },
        (error) => {
          console.error(error);
        }
      );

      Geocode.fromAddress(props.drop).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          setDropLat(lat)
          setDropLong(lng)
        },
        (error) => {
          console.error(error);
        }
      );

//   getDistance(
//         { latitude: pickupLat, longitude: pickupLong },
//         { latitude: dropLat, longitude: dropLong }
//     );






  return (
    <>
      <Button variant="success" onClick={handleClick}>
        Confirm Order
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Review Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card>
            <Card.Body>
              <p>
                <span>Pickup: </span>
                <span class="span-value">{props.pickup && props.pickup}</span>
              </p>
              <p>
                <span>Drop: </span>
                <span class="span-value">{props.drop && props.drop}</span>
              </p>
              <p>
                <span>Date: </span>
                <span class="span-value">{props.date && props.date.toLocaleString()}</span>
              </p>
              {props.instructions && (
                <p>
                  <span>Instructions: </span>
                  <span class="span-value">{props.instructions && props.instructions}</span>
                </p>
              )}
              <p>
                <span>Estimated Price: </span>
              </p>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Go to payment</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ReviewModal;
