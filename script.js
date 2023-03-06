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

class Popper {
  constructor(arrayToPop) {
    this.arrayToPop = arrayToPop;
  }

  arrayInClassPopper() {
    let popperInAction = true;
    alert(`Working Array: [${this.arrayToPop}]`);
    while (popperInAction) {
      if (truthy) {
        let removed = this.arrayToPop.pop();
        if (removed === undefined) {
          popperInAction = false;
        } else {
          alert(`Removed element: ${removed}`);
          alert(`Remaining array: [${this.arrayToPop}] \nClick OK to continue`);
          truthy--;
        }
      } else {
        let removed = this.arrayToPop.shift();
        if (removed === undefined) {
          popperInAction = false;
        } else {
          alert(`Removed element: ${removed}`);
          alert(`Remaining array: [${this.arrayToPop}] \nClick OK to continue`);
          truthy++;
        }
      }
    }

    return alert(
      `There are no further elements in the array to remove.\nClick OK to end program`
    );
  }
}

const arr = [1, 2, 3, 4, 5];

class arrPop extends Popper {}

const newArrayToPop = new arrPop(arr);

function arrayPopper() {
  // have truthy be 0 (falsey) to signify that it needs to take from the front, then have it be 1 (truthy) to signify it needs to take from the back

  newArrayToPop.arrayInClassPopper();
}

arrayPopper();
