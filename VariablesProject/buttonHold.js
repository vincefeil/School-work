//function is for demonstration purposes. when called it displays
//F and checks the the variable stringTime. if it is greater than 0 
//it subtracts 1 and checks again. when it reaches 0 it exits and
//and returns to the forever loop
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
    //while tests for button A pressed and hold. If true, it sets the variable
    //buttonPressed to 1. It shows the value of variable.

    while (input.buttonIsPressed(Button.A)) {
        buttonPressed = 1
        basic.showString("" + buttonPressed)
        //if function test for time variable to = 0. if it doesn't
        //it will subtract 1 and check again. once it reaches 0 it
        //calls the function showString.
        if (time > 0) {
            basic.showNumber(time)
            time += -1
            if (time == 0) {
                showString()
            }
        }
    }
    //sets variable to 0 and displays the value of the variable until
    //the A button is pressed and held.
    buttonPressed = 0
    basic.showString("" + buttonPressed)
})

