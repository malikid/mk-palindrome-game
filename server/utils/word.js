import XRegExp from 'xregexp';
import {Queue, QUEUE_FRONT, QUEUE_END} from 'Objects/queue';

const unicodeWordPattern = XRegExp('^\\pL+$');

export const isPalindrome = word => {
  let candidateQueue = new Queue();
  for(let i = 0; i < word.length; i++) {
    if(unicodeWordPattern.test(word[i])) {
      candidateQueue.enqueue(word[i]);
    }
  }

  if(candidateQueue.isEmpty()) {
    return false;
  }

  let characterFromTheFront, characterFromTheEnd;
  while(characterFromTheFront = candidateQueue.dequeue(QUEUE_FRONT)) {
    characterFromTheEnd = candidateQueue.dequeue(QUEUE_END);
    if(!characterFromTheEnd) {
      return true;
    }
    if(characterFromTheFront !== characterFromTheEnd) {
      return false;
    }
  }
	return true;
};
