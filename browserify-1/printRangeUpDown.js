// Problem #5

// given a min and a max, both integers, use recursion to console.log all of the
// integers from the min to the max, and then console.log the numbers from the max
// to the min. Do not use loops! Use recursion.

// ex:
//    printRangeUpDown(4, 10);
//    console.logs: 4,5,6,7,8,9,10,9,8,7,6,5,4
// var printRangeUpDown = function(min, max, num) {

// 	num = num||min;
//     //min === max should not be the case
//     if (num === max) {
//         console.log(num);

//         if (num === min) {
//             return;
//         } else {
//         	//num = max.
//         	//recursively call printRange until num = min.
//             return printRangeUpDown(min, max - 1, num - 1);
//         }
//     }

//     console.log(num);
//     return printRangeUpDown(min, max, num+1);

// };


var printRangeUpDown = function(min, max){
  if (min === max) {
    console.log(min);
    return;
  }

  console.log(min);
  printRangeUpDown(min + 1, max);
  console.log(min);
};

printRangeUpDown(1, 3);
//we would need a reference to the minimum
//we would also need a reference to the maximum
//1,1,1

//1,2
//1,2,1


//1,2,3
//1,2,3,2,1
