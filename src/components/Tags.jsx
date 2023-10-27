import Badge from 'react-bootstrap/Badge';

const Tags = ({ tagText, tagColor }) => {
  return (
    <>
    
    <Badge className="badge" bg={tagColor}>{tagText}</Badge>


    </>
  )
}

export default Tags