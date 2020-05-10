// Union types
function combine(input1: number | string. input: number | string) {

    let result
    if (typeof input 1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }

    return result
}
