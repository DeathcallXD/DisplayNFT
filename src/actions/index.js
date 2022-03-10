import * as api from '../api';

export const getNFTs = (walletAddress) => async (dispatch) => {
  try{
    const {data} = await api.fetchNFTs(walletAddress);

    dispatch({type: 'FETCH_NFTS', payload: data.items});
  }
  catch(error){
    console.error(error.message);
  }
}

export const getWalletAddress = () => async (dispatch) => {
  try{
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});

      dispatch({type: 'FETCH_WALLET_ADDRESS', payload: accounts[0]})
    }
  }
  catch(error){
    console.error(error);
  }
}

export const setNFT = (nftData) => (dispatch) => {
  try{
    dispatch({type: 'SET_CURRENT_NFT', payload: nftData})
  }
  catch(error){
    console.error(error);
  }
}
