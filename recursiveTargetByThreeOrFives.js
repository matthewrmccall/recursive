// findSolution
// inputs: target -a given number the program will try to find
// outputs: history -the previous sequence of 3's and 5's used to get to target, null -absence of value
// call the find function, and add 5 or multiply by 3 to the current value
// function to accept a target number to try and find
var findSolution = (target) => {
 // function to add 5 or multiply 3 on the current number
 // and to display the history of numbers while displaying the current 5 being added or 3 being multiplied
 var find = (current, history) => {
  // if the current number = the target number, return the history (got to the target number)
  if(current === target) {
   return history;
  // otherwise if current > target, return null - the program will return null (can't get to that target number)
} else if(current > target) {
   return null;
  // otherwise (current < target) call the find function and add 5 to current, or multiply current by 3
  // then display the numbers in history with either + 5 or * 3, whichever is tried.
  // this case cycles as long as current < target, when it's the case, + 5 or *3 values are tried
  // until the program reaches current === target and returns the history, or current > target,
  // in which case it will return null
} else {
   return find(current + 5, `(${history} + 5)`) ||
          find(current * 3, `(${history} * 3)`);
   }
  }
 return find(1, '1')
}

// last, log a call to the findSolution function with a target number
console.log(findSolution(26));
