import {expect} from 'Chai';
import * as ScoreService from 'Services/score';

describe('Score Service', () => {
  describe('insertToRank', () => {
    let rank = [];

    it('insert 2', done => {
      ScoreService.insertToRank(rank, {points: 2}, 0, rank.length);
      expect(rank[0].points).to.equal(2);
      done();
    });

    it('insert 7', done => {
      ScoreService.insertToRank(rank, {points: 7}, 0, rank.length);
      expect(rank[0].points).to.equal(7);
      expect(rank[1].points).to.equal(2);
      done();
    });

    it('insert 10', done => {
      ScoreService.insertToRank(rank, {points: 10}, 0, rank.length);
      expect(rank[0].points).to.equal(10);
      expect(rank[1].points).to.equal(7);
      expect(rank[2].points).to.equal(2);
      done();
    });

    it('insert 29', done => {
      ScoreService.insertToRank(rank, {points: 29}, 0, rank.length);
      expect(rank[0].points).to.equal(29);
      expect(rank[1].points).to.equal(10);
      expect(rank[2].points).to.equal(7);
      expect(rank[3].points).to.equal(2);
      done();
    });

    it('insert 97', done => {
      ScoreService.insertToRank(rank, {points: 97}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(10);
      expect(rank[3].points).to.equal(7);
      expect(rank[4].points).to.equal(2);
      done();
    });

    it('insert 1', done => {
      ScoreService.insertToRank(rank, {points: 1}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(10);
      expect(rank[3].points).to.equal(7);
      expect(rank[4].points).to.equal(2);
      expect(rank[5].points).to.equal(1);
      done();
    });

    it('insert 5', done => {
      ScoreService.insertToRank(rank, {points: 5}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(10);
      expect(rank[3].points).to.equal(7);
      expect(rank[4].points).to.equal(5);
      expect(rank[5].points).to.equal(2);
      expect(rank[6].points).to.equal(1);
      done();
    });

    it('insert 7', done => {
      ScoreService.insertToRank(rank, {points: 7}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(10);
      expect(rank[3].points).to.equal(7);
      expect(rank[4].points).to.equal(7);
      expect(rank[5].points).to.equal(5);
      expect(rank[6].points).to.equal(2);
      expect(rank[7].points).to.equal(1);
      done();
    });

    it('insert 9', done => {
      ScoreService.insertToRank(rank, {points: 9}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(10);
      expect(rank[3].points).to.equal(9);
      expect(rank[4].points).to.equal(7);
      expect(rank[5].points).to.equal(7);
      expect(rank[6].points).to.equal(5);
      expect(rank[7].points).to.equal(2);
      expect(rank[8].points).to.equal(1);
      done();
    });

    it('insert 10', done => {
      ScoreService.insertToRank(rank, {points: 10}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(10);
      expect(rank[3].points).to.equal(10);
      expect(rank[4].points).to.equal(9);
      expect(rank[5].points).to.equal(7);
      expect(rank[6].points).to.equal(7);
      expect(rank[7].points).to.equal(5);
      expect(rank[8].points).to.equal(2);
      expect(rank[9].points).to.equal(1);
      done();
    });

    it('insert 21', done => {
      ScoreService.insertToRank(rank, {points: 21}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(21);
      expect(rank[3].points).to.equal(10);
      expect(rank[4].points).to.equal(10);
      expect(rank[5].points).to.equal(9);
      expect(rank[6].points).to.equal(7);
      expect(rank[7].points).to.equal(7);
      expect(rank[8].points).to.equal(5);
      expect(rank[9].points).to.equal(2);
      expect(rank[10].points).to.equal(1);
      done();
    });

    it('insert 29', done => {
      ScoreService.insertToRank(rank, {points: 29}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(29);
      expect(rank[2].points).to.equal(29);
      expect(rank[3].points).to.equal(21);
      expect(rank[4].points).to.equal(10);
      expect(rank[5].points).to.equal(10);
      expect(rank[6].points).to.equal(9);
      expect(rank[7].points).to.equal(7);
      expect(rank[8].points).to.equal(7);
      expect(rank[9].points).to.equal(5);
      expect(rank[10].points).to.equal(2);
      expect(rank[11].points).to.equal(1);
      done();
    });

    it('insert 89', done => {
      ScoreService.insertToRank(rank, {points: 89}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(89);
      expect(rank[2].points).to.equal(29);
      expect(rank[3].points).to.equal(29);
      expect(rank[4].points).to.equal(21);
      expect(rank[5].points).to.equal(10);
      expect(rank[6].points).to.equal(10);
      expect(rank[7].points).to.equal(9);
      expect(rank[8].points).to.equal(7);
      expect(rank[9].points).to.equal(7);
      expect(rank[10].points).to.equal(5);
      expect(rank[11].points).to.equal(2);
      expect(rank[12].points).to.equal(1);
      done();
    });

    it('insert 97', done => {
      ScoreService.insertToRank(rank, {points: 97}, 0, rank.length);
      expect(rank[0].points).to.equal(97);
      expect(rank[1].points).to.equal(97);
      expect(rank[2].points).to.equal(89);
      expect(rank[3].points).to.equal(29);
      expect(rank[4].points).to.equal(29);
      expect(rank[5].points).to.equal(21);
      expect(rank[6].points).to.equal(10);
      expect(rank[7].points).to.equal(10);
      expect(rank[8].points).to.equal(9);
      expect(rank[9].points).to.equal(7);
      expect(rank[10].points).to.equal(7);
      expect(rank[11].points).to.equal(5);
      expect(rank[12].points).to.equal(2);
      expect(rank[13].points).to.equal(1);
      done();
    });

    it('insert 100', done => {
      ScoreService.insertToRank(rank, {points: 100}, 0, rank.length);
      expect(rank[0].points).to.equal(100);
      expect(rank[1].points).to.equal(97);
      expect(rank[2].points).to.equal(97);
      expect(rank[3].points).to.equal(89);
      expect(rank[4].points).to.equal(29);
      expect(rank[5].points).to.equal(29);
      expect(rank[6].points).to.equal(21);
      expect(rank[7].points).to.equal(10);
      expect(rank[8].points).to.equal(10);
      expect(rank[9].points).to.equal(9);
      expect(rank[10].points).to.equal(7);
      expect(rank[11].points).to.equal(7);
      expect(rank[12].points).to.equal(5);
      expect(rank[13].points).to.equal(2);
      expect(rank[14].points).to.equal(1);
      done();
    });
  });
});
