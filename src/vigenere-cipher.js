const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
      if (message === undefined || key === undefined) {
        throw new Error('Incorrect arguments!');
      }
      return this.cryptoProcess(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
      if (encryptedMessage === undefined || key === undefined) {
        throw new Error('Incorrect arguments!');
      }
      return this.cryptoProcess(encryptedMessage, key, 'decrypt');
  }

  cryptoProcess(text, key, method) {
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;


    // 
    [...text].forEach(char => {
      if (this.alphabet.includes(char.toUpperCase())) {
        let shift = this.alphabet.indexOf(key[keyIndex % key.length]);
        shift = method === 'encrypt' ? shift : -shift;
        const newChar = this.shiftChar(char, shift);
        result += newChar;
        keyIndex++;
      }
      else {
        result += char;
      }
    });


    return this.isDirect ? result : result.split('').reverse().join('');
  }

  shiftChar(char, shift) {
    const charIndex = this.alphabet.indexOf(char.toUpperCase());
    const newIndex = (charIndex + shift + 26) % 26;
    return this.alphabet[newIndex];
  }
}

module.exports = {
  VigenereCipheringMachine
};
