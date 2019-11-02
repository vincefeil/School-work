let buttonCounter = 0

function increment() {
    buttonCounter += 1

}

function decrement() {
    buttonCounter += -1

}
basic.forever(function () {
    basic.showNumber(buttonCounter)


    input.onButtonPressed(Button.A, function () {
        increment()

    })
    input.onButtonPressed(Button.B, function () {
        decrement()

    })
})
