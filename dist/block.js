"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    //static을 선언해줌으로써 block 밖에서도 이 함수를 호출할 수 있게 함.
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
} // block structure 
Block.calculateBlockHash = (index, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + data + timestamp).toString();
const genesisBlock = new Block(0, "20304050", "", "Hello", 123456789);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
const getLatestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, data, newTimeStamp);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    return newBlock;
};
console.log(createNewBlock("새로운 블록"));
//# sourceMappingURL=block.js.map