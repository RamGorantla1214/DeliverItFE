import { Container, Col, Card, Row, Form } from "react-bootstrap";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";
import "./Pickup.css";
import { usePlacesWidget } from "react-google-autocomplete";
import { useSelector, useDispatch } from "react-redux";
import {
  setInstructions,
  setPickupAddress,
  setDropAddress,
  setDate,
} from "../../../Redux/actions";
import ReviewModal from "./ReviewModal/ReviewModal";

const options = {
  fields: ["address_components", "geometry", "icon", "name"],
  strictBounds: false,
  types: ['geocode'],
  componentRestrictions: { country: "ie" }
};

const Pickup = () => {
  const address = useSelector((state) => state.address);
  const state = useSelector((s) => s);
  const dispatch = useDispatch();

  //Local states to dispatch to redux for pickup

  const [pickup, setPickup] = useState("");
  const [pickupFlat, setPickupFlat] = useState("");
  const [pickupBuilding, setPickupBuilding] = useState("");
  const [pickupStreet, setPickupStreet] = useState("");

  //Local states to dispatch to redux for drop
  const [drop, setDrop] = useState("");
  const [dropFlat, setDropFlat] = useState("");
  const [dropBuilding, setDropBuilding] = useState("");
  const [dropStreet, setDropStreet] = useState("");

  const [currInstructions, setCurrInstructions] = useState('')

  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyCLKJPN2AwuEPInrV54tkLSqYb2WOOTM8A",
    onPlaceSelected: (place) => {
      console.log(place);
      let curr_drop = place.address_components.map((address) => address.long_name).join(',')
      setDrop(curr_drop);
      console.log(curr_drop)
    },
    options,
  });

  const handleDispatch = async () => {
    if(pickup){
      console.log(pickup)
    }else{
      setPickup(address)
    }
    dispatch(setPickupAddress(pickup));
    dispatch(setDropAddress(drop));
  };

  const [value, onChange] = useState(new Date());
  return (
    <>
    
      <Container className="pt-5">
        <Row>
          <Col className="col-9 mr-0">
            <Card className="pickup-card">
              <Card.Body>
                <Card.Title>Send Packages</Card.Title>
                <Card.Text>Your on demand local courier</Card.Text>
                <Row>
                  <Col>
                    {/* <BiCircle/> */}
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicEmail"
                        required
                      >
                        <Form.Label>PICKUP LOCATION</Form.Label>
                        {/* <MapModal/> */}
                        <div>
                          <input
                            id="id1"
                            style={{ width: "100%" }}
                            placeholder="search pickup"
                            defaultValue={address && address}
                            onChange={e => setPickup(e.target.value)}
                            required
                          />
                          {/* Render dropdown */}
                        </div>
                        {/* <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text> */}
                        <Row className="justify-content-center mt-3">
                          <div>
                            <input
                              style={{ width: "90%" }}
                              placeholder="Flat No."
                              onChange={(e) => {
                                setPickupFlat(e.target.value);
                              }}
                              required
                            />
                            {/* Render dropdown */}
                          </div>
                          <div>
                            <input
                              style={{ width: "90%" }}
                              placeholder="Building name"
                              onChange={(e) =>
                                setPickupBuilding(e.target.value)
                              }
                            />
                            {/* Render dropdown */}
                          </div>
                          <div>
                            <input
                              style={{ width: "90%" }}
                              placeholder="Street"
                              onChange={(e) => setPickupStreet(e.target.value)}
                            />
                            {/* Render dropdown */}
                          </div>
                        </Row>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                        required
                      >
                        <Form.Label>DROP LOCATION</Form.Label>
                        <div>
                          <input
                            ref={ref}
                            id="id2"
                            style={{ width: "100%" }}
                            placeholder="search drop"
                            onChange={(e) => setDrop(e.target.value)}
                            required
                          />
                          {/* Render dropdown */}
                        </div>
                        <Row className="justify-content-center mt-3">
                          <div>
                            <input
                              style={{ width: "90%" }}
                              placeholder="Flat No."
                              onChange={(e) => setDropFlat(e.target.value)}
                              required
                            />
                            {/* Render dropdown */}
                          </div>
                          <div>
                            <input
                              style={{ width: "90%" }}
                              placeholder="Building name"
                              onChange={(e) => setDropBuilding(e.target.value)}
                            />
                            {/* Render dropdown */}
                          </div>
                          <div>
                            <input
                              style={{ width: "90%" }}
                              placeholder="Street"
                              onChange={(e) => setDropStreet(e.target.value)}
                            />
                            {/* Render dropdown */}
                          </div>
                        </Row>
                      </Form.Group>
                      <Form.Label>Date to be picked on?</Form.Label>
                      <div className='mb-3'>
                      <DateTimePicker onChange={onChange} value={value} />
                      </div>

                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>
                          Any instructions for delivery partner?
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          onChange={(e) =>
                            setCurrInstructions(e.target.value)
                          }
                        />
                      </Form.Group>
                      {/* <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="Check me out" />
                      </Form.Group> */}
                      {/* <Button variant="success" type="submit">
                        Confirm Order
                      </Button> */}
                      <ReviewModal
                        handleDispatch={handleDispatch}
                        pickup={pickup}
                        drop={drop}
                        instructions={currInstructions}
                        date={value}
                      />
                    </Form>
                  </Col>
                </Row>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-3">
            <Card className="pickup-card">
              <Card.Body>
                <Card.Title className="text-success">
                  Terms & conditions
                </Card.Title>
                <Card.Text>Upcoming...</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Pickup;
