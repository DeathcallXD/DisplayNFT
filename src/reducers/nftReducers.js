const nftReducers = (state=[], action) => {
  switch(action.type){
    case 'FETCH_NFTS':
      return action.payload;

    default: return state;
  }
}

export default nftReducers
