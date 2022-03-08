import {combineReducers} from 'redux';
import nftReducers from './nftReducers';
import walletAddressReducer from './walletAddressReducer'

export default combineReducers({
  nftReducers, walletAddressReducer
});
