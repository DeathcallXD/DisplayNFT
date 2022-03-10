import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {setNFT} from '../actions/index';
import './css/styles.css';

function NFTCard({nft}) {

  let len = 0;
  let desc = '';
  let imgUrl = nft.meta.content[1].url;

  if(nft.meta.description){
    len = nft.meta.description.length;
    desc  = nft.meta.description.substr(0,300);
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayNFT = () => {
    dispatch(setNFT(nft.meta))
    navigate('/nft');
  }

  return (
    <div>
      <Card className='nft-card' onClick={displayNFT}>
        <Card.Img variant="top" src={imgUrl} className='fix-img-width-height'/>
        <Card.Body>
          <Card.Title>{nft.meta.name}</Card.Title>
          <Card.Text>
            {len > 296 ? (desc.substr(0,296) + '....')  : (desc)}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default NFTCard;
