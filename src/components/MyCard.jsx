

import Card from 'react-bootstrap/Card';
import Tags from './Tags';

const MyCard = ({ image, name, descripcion, tagText, tagColor}) => {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body className="my-card">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
      
          
        </Card.Body>
        <div className='my-tags'>
        <Tags  tagText={tagText} tagColor={tagColor}/>
        </div>
      </Card>
    </>
  );
}

export default MyCard