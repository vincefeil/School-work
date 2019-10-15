//function is for demonstration purposes
function showString () {
    while (stringTime > 0) {
        basic.showString("F")
        basic.pause(100)
        stringTime += -1
    }
}
//setup variables
let buttonPressed = 0
let stringTime = 0
let time = 2
stringTime = 5

basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        buttonPressed = 1
        basic.showString("" + buttonPressed)
        if (time > 0) {
            basic.showNumber(time)
            time += -1
            if (time == 0) {
                showString()
            }
        }
    }
    buttonPressed = 0
    basic.showString("" + buttonPressed)
})

