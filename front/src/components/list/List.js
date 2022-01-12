import {ListGroup} from 'react-bootstrap';
function List({lists}) { 
  return (
        <ListGroup className='List border-0'>
            {lists.map((list)=>(
                <ListGroup.Item className='border-0 bg-transparent'>{list}</ListGroup.Item>
            ))}
        </ListGroup>
  );
}

export default List;