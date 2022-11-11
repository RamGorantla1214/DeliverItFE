import {Row, Container, Col, Button} from 'react-bootstrap'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import './Footer.css'

const Footer = () => {
return(
    <Container className='footer-class'>
                <Row className='mt-5 text-muted'>
                    <AiFillFacebook className='mx-2 footer-icons' size='lg'/>
                    <AiFillInstagram className='mx-2 footer-icons' size='lg'/>
                    <AiOutlineTwitter className='mx-2 footer-icons' size='lg'/>
                    <AiFillYoutube className='mx-2 footer-icons' size='lg'/>
                </Row>
                <Row>
                <Col className='col-3 flex-column align-items-start pl-2 mt-3 text-dark'>
                    <h6>About</h6>
                    <h6>Contact Us</h6>
                    <h6>Terms & Conditions</h6>
                </Col>
                <Col className='col-3 flex-column align-items-start pl-2 mt-3 text-dark second-list-col'>
                    <h6>Privacy Policy</h6>
                    <h6>Jobs</h6>
                    <h6>Delit Partner</h6>
                </Col>
                </Row>
                <Row className='pl-1'>
                    <Button variant='light' className='mt-3 mb-5' style={{border:'1px solid gray'}}>Serviceable Areas</Button>
                </Row>
            </Container>
)
}

export default Footer