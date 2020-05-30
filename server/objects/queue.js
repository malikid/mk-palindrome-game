export const QUEUE_FRONT = 0;
export const QUEUE_END = 1;

export class Queue {
  data = [];

  enqueue = data => {
    if(data) {
      this.data.push(data);
    }
  };

  dequeue = (from) => {
    if(!this.data){
      return null;
    }
    if(from === QUEUE_FRONT) {
      return this.data.shift();
    }
    return this.data.pop();
  };

  isEmpty = () => !this.data.length;
};
