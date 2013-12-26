function mergeSort(array) {
	if (array.length < 2){  // Check for trivial array input
		return array;
	}
	var middle = Math.floor(array.length / 2); // Find length of half of the inputted array
	var left = array.slice(0, middle);  // Assign the left half of array to var left
	var right = array.slice(middle);    // Assign the right half of array to var right

	var leftSorted = mergeSort(left);   // Recursively called mergeSort on both right and left halves
	var rightSorted = mergeSort(right);  
	var sorted = [];

	while (leftSorted.length > 0 || rightSorted.length > 0) {  // Continue iteration until one of the sorted arrays is emptied
		if (leftSorted.length < 1) {
			sorted = sorted.concat(rightSorted);
			break;
		}
		if (rightSorted.length < 1) {
			sorted = sorted.concat(leftSorted);
			break;
		}
		if (leftSorted[0] < rightSorted[0]) {
			var num = leftSorted.shift();  // Removes first number from leftsorted array and passes it into var num
		}
		else {
			var num = rightSorted.shift();  // Removes first number from rightsorted array and passes it into var num
		}
		sorted.push(num);  // Append num to end of sorted array
	}
	return sorted;  // Output the sorted array after all of the numbers have been evaluated

}

console.log(mergeSort([1,4,445,3,8,12,7]));  // Test call