


var mergeSort = function(arr){

	if(arr.length === 1 || arr.length === 0){
		return arr;
	}

	var arr1 = mergeSort(arr.slice(0,Math.ceil(arr.length/2))); //first half
	var arr2 = mergeSort(arr.slice(Math.ceil(arr.length/2), arr.length)); //second half

	var n1 = 0; //tracking index for arr1
	var n2 = 0; //tracking index for arr2

	for(var i=0; i < arr.length; i++){

		if(n1 >= arr1.length || n2 >= arr2.length){

			if(n2 < arr2.length){
				arr[i] = arr2[n2];
				n2++;
				continue;
			}

			if(n1 < arr1.length){
				arr[i] = arr1[n1];
				n1++;
				continue;
			}

		}

		if(arr1[n1] < arr2[n2]){
			arr[i] = arr1[n1];
			n1++;
		} else {
			arr[i] = arr2[n2];
			n2++;
		}
	}

	return arr;
};



var numbers = [5,4,3,2,1,0];
console.log(mergeSort(numbers));
//console.log(mergeSort(numbers));