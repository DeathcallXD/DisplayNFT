const walletAddressReducer = (state='', action) => {
  switch(action.type){
    case 'FETCH_WALLET_ADDRESS':
      return action.payload;

    default: return state;
  }
}

export default walletAddressReducer;
