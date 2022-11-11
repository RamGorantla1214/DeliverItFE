import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button, Image } from "react-bootstrap";
import "./Fruits.css";
import {MdAddShoppingCart} from 'react-icons/md'

const Fruits = () => {
  const [fruitsData, setFruitsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(`http://localhost:3001/fruits`);

      if (response.ok) {
        console.log("reponse ok!");
        let resp = await response.json();
        setFruitsData(resp);
        console.log("fetch", resp);
      } else {
        console.log("response not ok!");
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const replace = (str) => {
    let newStr = str.replace(/-/g, ' ')
      return newStr
  }

  return (
    <>
     <Container style={{minWidth:'0'}}>
        <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-2 justify-content-center">
          
          {fruitsData.map((fruit) => {
            return (
                <Col className='px-0'>
              <Card className='card-class'>
              <Image src={fruit.Image_Path} roundedCircle className='img-class'/>
                <Card.Body>
                  <Card.Title className='text-ellipsis'>{fruit.Class_Name}</Card.Title>
                  <Card.Text className='price'>
                    {fruit.Price}€/each
                  </Card.Text>
                  <Button variant="light" className='btn-class'><MdAddShoppingCart className='svg-class' color='green'/> Add</Button>
                </Card.Body>
              </Card>
              </Col>
            );
          })}
          
        </Row>
      </Container>

    </>
  );
};

export default Fruits;
