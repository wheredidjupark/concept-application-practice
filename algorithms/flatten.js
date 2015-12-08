function flatten(arr) {
  // I'm a flatten, baby
  
  var result = [];

  (function deepFlatten(array){
//if the argument is not an array, just return it.
  if(Array.isArray(array) ){
    
  //if arr is an array
  for(var i=0; i <array.length; i++){
    //we want to move the element to outside
    deepFlatten(array[i]);
  }  
  } else{
    result.push(array);
  }
  

  })(arr);

  return result;
  
}


console.log(flatten([ [['a']], [['b']] ]));



//[[1]];
//flatten([[1],[2,3,4]]);


//flatten([1, [2], [3, [[4]]]]);
