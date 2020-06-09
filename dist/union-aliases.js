function combine(input1, input2, resultConversion // literal types, helps prevent errors due to types
) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedNames = combine('Max', 'Anna', 'as-string');
console.log(combinedNames);
