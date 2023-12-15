function printToScreen() {
    console.log("Async implementation")
}
setTimeout(printToScreen, 4 * 1000)

var counter = 0
for (var i = 0; i < 1000000000; i++) {
    counter += 1
}
console.log(counter)