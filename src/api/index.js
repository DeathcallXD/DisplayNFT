import axios from 'axios';

const url = 'https://api.rarible.org/v0.1/items/byOwner';

// 0x60f80121c31a0d46b5279700f9df786054aa5ee5

export const fetchNFTs = (walletAddress) => axios.get(`${url}/?owner=ETHEREUM:${walletAddress}`);
