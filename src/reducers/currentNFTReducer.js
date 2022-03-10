const currentNftReducer = (state={}, action) => {
  switch(action.type){
    case 'SET_CURRENT_NFT':
      return action.payload;

    default: return state;
  }
}

export default currentNftReducer;
