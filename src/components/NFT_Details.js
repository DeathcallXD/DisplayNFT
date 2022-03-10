import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import './css/styles.css';

function NFTDetails() {

  const currrent_NFT = useSelector((state) => state.currentNftReducer);

  return (
    <>
      <div className="split left">
        <div className="centered">
          <img src={currrent_NFT.content[1].url} alt="Avatar woman" />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <h2 className="nft-container"> {currrent_NFT.name} </h2>
          <p> {currrent_NFT.description} </p>
        </div>
      </div>
    </>
  );
}

export default NFTDetails;
