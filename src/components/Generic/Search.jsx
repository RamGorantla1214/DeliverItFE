import {Container, InputGroup, FormControl} from 'react-bootstrap'
import './Search.css'

const Search = (props) => {

    return(
        <>
        {/* <Container>
            <input className='search-class' type="text" placeholder={props.content}></input>
        </Container> */}
        <InputGroup className="mb-3">
    {/* <InputGroup.Checkbox aria-label="Checkbox for following text input" /> */}
    <FormControl aria-label="Text input with checkbox" placeholder={props.content}/>
  </InputGroup>
        </>
    )
}

export default Search