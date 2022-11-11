import { Card, CardGroup, Container } from "react-bootstrap";
import {withRouter} from 'react-router-dom'
import './Cards.css'

const Cards = (props) => {
  return (
   
        <CardGroup className='mt-4 mb-4'>
        <Card className='mr-2 cardHover'>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/v1635069282/DelIt/Groceries_qptxhh.png" />
        </Card>
        <Card onClick={() => props.history.push('/pickup')} className='mx-2 cardHover'>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/v1635069513/DelIt/Pickup_Drop_1_is1okl.png" />
        </Card>
        <Card onClick={() => props.history.push('/fruits')} className='ml-2 cardHover'>
          <Card.Img variant="top" src="https://res.cloudinary.com/dsu915vad/image/upload/v1635069514/DelIt/Fruits_Vegetables_1_irjulw.png" />
        </Card>
        </CardGroup>
  );
};

export default withRouter(Cards);
