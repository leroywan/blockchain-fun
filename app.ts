import {Blockchain, Transaction} from './chain';
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const testKey = ec.keyFromPrivate('9dc7f98ed548e22d5a859f022a1e04aae398a01c576c2489f8efc47d815017c6');
const walletAddress = testKey.getPublic('hex');

const coin = new Blockchain();