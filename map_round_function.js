let testNumber = 0
basic.forever(function () {
    testNumber = 500
    basic.showNumber(Math.round(Math.map(testNumber, 0, 1023, 0, 4)))
})
