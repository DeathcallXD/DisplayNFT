import {combineReducers} from 'redux';
import nftReducers from './nftReducers';
import walletAddressReducer from './walletAddressReducer';
import currentNftReducer from './currentNFTReducer';

export default combineReducers({
  nftReducers, walletAddressReducer, currentNftReducer
});
