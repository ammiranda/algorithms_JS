function mergeSort(array) {
	if (array.length < 2){
		return array;
	}
	var middle = Math.floor(array.length / 2);
	var left = array.slice(0, middle);
	var right = array.slice(middle);

	var leftSorted = mergeSort(left);
	var rightSorted = mergeSort(right);
	var sorted = [];

	while (leftSorted.length > 0 || rightSorted.length > 0) {
		if (leftSorted.length < 1) {
			sorted = sorted.concat(rightSorted);
			break;
		}
		if (rightSorted.length < 1) {
			sorted = sorted.concat(leftSorted);
			break;
		}
		if (leftSorted[0] < rightSorted[0]) {
			var num = leftSorted.shift();
		}
		else {
			var num = rightSorted.shift();
		}
		sorted.push(num);
	}
	return sorted;

}

console.log(mergeSort([1,4,445,3,8,12,7]));