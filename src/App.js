import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/header';
import NFTDetails from './components/NFT_Details';
import {Button} from 'react-bootstrap';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}></Route>
      <Route path='/nft' element={<NFTDetails/>}></Route>
    </Routes>
  );
}

export default App;
