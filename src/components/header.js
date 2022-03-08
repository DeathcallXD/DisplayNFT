import './css/styles.css';
import {Container, Row, Col, Button} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNFTs, getWalletAddress} from '../actions/index';
import NFTContainer from './NFT_Container';

function Header() {
  const dispatch = useDispatch();

  const connectWallet = async () => {
    dispatch(getWalletAddress());
  }

  const walletAdd = useSelector((state) => state.walletAddressReducer);

  useEffect(() => {
    if(walletAdd) dispatch(getNFTs(walletAdd));
  },[dispatch, walletAdd]);

  return (
    <>
      <Container className='upper-margin'>
        <Row>
          <Col className='align-text'>
            <span className='make-bold'>Account: </span> {walletAdd}
          </Col>
          <Col lg="auto" md="auto" sm="auto">
            <Button variant='outline-primary' onClick={connectWallet}>Connect Wallet</Button>
          </Col>
        </Row>
      </Container>
      <Container>
        <NFTContainer></NFTContainer>
      </Container>
    </>
  );
}

export default Header;
