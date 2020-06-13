/**
 * Given `n`, take the sum of the digits of `n`.
 * If that value has more than one digit,
 * continue reducing in this way until a single-digit number is produced.
 * This is only applicable to the natural numbers.
 * @param {number} n
 */
function digital_root(n) {
	let rootNumber = null;
	if (/^\d$/.test(n)) {
		rootNumber = n;
	} else {
		let numbers = [...n+""].map((n) => +n);
		rootNumber = numbers.reduce((a, b) => a + b, 0);
		return digital_root(rootNumber);
	}

	return rootNumber;
}

console.log(digital_root(222))
console.log(digital_root(4))
console.log(digital_root(8766543))
