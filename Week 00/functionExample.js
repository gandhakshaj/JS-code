// Function take another function as arguement
var startTime = Date.now();
function sum(startIndex, endIndex) {
    return startIndex + endIndex;
}

function mulitply(startIndex, endIndex) {
    return startIndex * endIndex;
}

function divide(startIndex, endIndex) {
    return startIndex / endIndex;
}

function doArithmaticFunction(firstEle, secondEle, artimaticfn) {
    var result = artimaticfn(firstEle, secondEle);
    return result;
}

var finalresult = doArithmaticFunction(4, 10, sum);
console.log(finalresult);
console.log(typeof (true))
var endTime = Date.now()
console.log(endTime - startTime)
