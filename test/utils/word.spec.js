import {expect} from 'Chai';
import * as WordUtils from 'Utils/word';

describe('Word Utils', () => {
  describe('isPalindrome', () => {
    it('a should be palindrome', done => {
      expect(WordUtils.isPalindrome('a')).to.be.true;
      done();
    });

    it('abba should be palindrome', done => {
      expect(WordUtils.isPalindrome('abba')).to.be.true;
      done();
    });

    it('attttttt a should be palindrome', done => {
      expect(WordUtils.isPalindrome('attttttt a')).to.be.true;
      done();
    });

    it('ピカ', done => {
      expect(WordUtils.isPalindrome('ピカ')).to.be.false;
      done();
    });

    it('ピカピカ', done => {
      expect(WordUtils.isPalindrome('ピカピカ')).to.be.false;
      done();
    });

    it('你好好你', done => {
      expect(WordUtils.isPalindrome('你好好你')).to.be.true;
      done();
    });

    it('你好嗎', done => {
      expect(WordUtils.isPalindrome('你好嗎')).to.be.false;
      done();
    });

    it('= =', done => {
      expect(WordUtils.isPalindrome('= =')).to.be.false;
      done();
    });
  });
});
