import {slice, splice} from 'lodash';
import {isPalindrome} from 'Utils/word';

let rank = [];

export const getTopFiveScores = () => {
  const topFive = slice(rank, 0, 5);
  return topFive;
};

export const insertToRank = (rank, entry, startIndex, endIndex) => {
  if(startIndex === endIndex) {
    rank.splice(endIndex, 0, entry);
    return;
  }

  const points = entry.points;
  if(points <= rank[endIndex - 1].points) {
    rank.splice(endIndex, 0, entry);
    return;
  }

  if(points >= rank[startIndex].points) {
    rank.splice(startIndex, 0, entry);
    return;
  }

  if(startIndex === endIndex - 1) {
    rank.splice(endIndex, 0, entry);
    return;
  }

  let index = Math.floor((endIndex + startIndex) / 2);
  if(points === rank[index].points) {
    rank.splice(index, 0, entry);
  } else if(points < rank[index].points) {
    insertToRank(rank, entry, index, endIndex);
  } else {
    insertToRank(rank, entry, startIndex, index);
  }
};

export const submitEntry = (entry) => {
  let points = 0;
  let {word} = entry;

  word = word.replace(/\s/g, '');
  console.log({word});

  if(isPalindrome(word)) {
    points = word.length;
    entry.points = points;

    const rankLength = rank.length;
    insertToRank(rank, entry, 0, rankLength);
  }
  return points;
};
