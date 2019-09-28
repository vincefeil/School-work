//on button A set variable A to 1
input.onButtonPressed(Button.A, function () {
    B = 0
    A = 1
})
//on button B set variable B to 1
input.onButtonPressed(Button.B, function () {
    A = 0
    B = 1
})
//set variable B to 0
let B = 0
//set variable A to 0
let A = 0
// show string "Hello" at start up
basic.showString("Hello!")
//run the following in the background
basic.forever(function () {
    //while variable A = 1 display the following
    while (A == 1) {
        //a dot crossing the screen horizltaly
        for (let index = 0; index <= 4; index++) {
            led.plot(Math.constrain(index, 0, 4), 2)
            basic.pause(100)
            led.unplot(Math.constrain(index, 0, 4), 2)
            basic.pause(100)
        }
        //a dot crossing the screen verticaly
        for (let index = 0; index <= 4; index++) {
            led.plot(2, Math.constrain(index, 0, 4))
            basic.pause(100)
            led.unplot(2, Math.constrain(index, 0, 4))
            basic.pause(100)
        }
    }
    //while B = 1 display the following
    while (B == 1) {
        //a dot crossing the screen diagonaly
        for (let index = 0; index <= 4; index++) {
            led.plot(Math.constrain(index, 0, 4), Math.constrain(index, 0, 4))
            basic.pause(100)
            led.unplot(Math.constrain(index, 0, 4), Math.constrain(index, 0, 4))
            basic.pause(100)
        }
    }
})