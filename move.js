
const move = (arr, where) => {
  let readline = require('readline-sync');
  let a = readline.keyIn('Press a key! ');
  let place = where.split('');
  let x = place[0];
  let y = place[1];
  if (a === 'w') {
    if (x > 1) {
      x = x - 1;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 's') {
    if (x < arr.length - 1) {
      x = x + 1;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'a') {
    if (y < arr[x].length - 1) {
      y = y + 1;
    } else {
      console.log('Invalid movement!');
    }
  } else if (a === 'd') {
    if (y > 1) {
      y = y - 1;
    } else {
      console.log('Invalid movement!');
    }
  }
};

module.exports = move;
/* w=up;
s=down;
a=left;
d=right, */
