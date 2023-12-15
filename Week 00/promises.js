var age = 23
var result = function () {
    if (age < 23) {
        return false
    }
    else {
        return true
    }
}
// call it as function not as variable
// console.log(result) wrong approach
// correct approach
console.log(result())
