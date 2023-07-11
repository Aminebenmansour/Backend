import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {main} from "../assets" ; 
// use it in the course section ! 
// card by react bootstrap ! 
function Card1() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={main} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  ); 
}

export default Card1; 