/* 
Alternating Array Popper
  Using OOP, build a program that will take an array, and alternate between removing from the front and back every time your method is run.
EX:
const arr = [1, 2, 3, 4, 5]
arrayPopper() => 1
arrayPopper() => 5
arrayPopper() => 2
arrayPopper() => 4
arrayPopper() => 3
arrayPopper() => undefined
*/

let truthy = 0;
const arr = [1, 2, 3, 4, 5];

class Popper {
  constructor(arrayFunc) {
    this.arrayFunc = arrayFunc;
  }

  arrayInClassPopper(arrayInput) {
    if (truthy) {
      let removed = arrayInput.pop();
      alert(removed);
      return truthy++;
    } else {
      let removed = arrayInput.shift();
      alert(removed);
      return truthy--;
    }
  }
}

class ArrPop extends Popper {}

const arrayToPop = new ArrPop("test array");

function arrayPopper(arrayInput) {
  // have truthy be 0 (falsey) to signify that it needs to take from the front, then have it be 1 (truthy) to signify it needs to take from the back

  ArrPop.arrayInClassPopper(arrayInput);
}
const arrrrrrrrg = new Popper(arr);
arrayPopper(arrrrrrrrg);
