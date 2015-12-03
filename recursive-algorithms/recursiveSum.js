
var recursiveSum = function(n){


//if non-positive number, return 0
if(n <= 0){
	return 0;
}


n = n.toString();
return +n.charAt(0) + recursiveSum(+n.substr(1));
};

console.log(recursiveSum(1236));