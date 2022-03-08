import {Button} from 'react-bootstrap';
import {useSelector} from 'react-redux';
import NFTCard from './NFT_Card';

function NFTContainer() {

  const nfts = useSelector((state) => state.nftReducers);

  return (
    <div className='nft-container'>
    {
      nfts.map((nft,index) => {
        return <NFTCard  nft={nft} key={index}></NFTCard>
      })
    }
    </div>
  )
}

export default NFTContainer;
