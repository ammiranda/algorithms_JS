var eratosthenes = function(n) {
	var array = [], upperLimit = Math.sqrt(n), output = [];

	for (var i = 0; i < n; i++) {
		array.push(true);	
	}

	for (var i = 2; i <= upperLimit; i++) {
		if (array[i]) {
			for (var j = i * i; j < n; j += i) {
				array[j] = false;
			}
		}
	}

	for (var i = 2; i < n; i++) {
		if (array[i]) {
			output.push(i);
		}
	}

	return output;
};

console.log(eratosthenes(10));
