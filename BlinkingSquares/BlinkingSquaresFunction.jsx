input.onGesture(Gesture.ScreenUp, function () {
    F = 1
    SquareTimeI = 2000
    //SquareTime = 0
    //LineTime = 0
    BlinkingSquaresI()
})
function BlinkingSquaresI() {
    while (SquareTimeI > 0) {
        if (F == 1) {
            // this group plots the outside square pauses for 1/2
            // second and clears the screen
            for (let indexI = 0; indexI <= 4; indexI++) {
                led.plot(0, indexI)
            }
            for (let index2I = 1; index2I <= 4; index2I++) {



                led.plot(index2I, 4)



            }
            for (let index3I = 3; index3I >= 0; index3I += -1) {



                led.plot(4, index3I)



            }
            for (let index4I = 3; index4I >= 0; index4I += -1) {



                led.plot(index4I, 0)



            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            // this group plots the middle square pauses for 1/2
            // second and clears the screen
            for (let index5I = 1; index5I <= 3; index5I++) {



                led.plot(1, index5I)



            }
            for (let index6I = 2; index6I <= 3; index6I++) {



                led.plot(index6I, 3)



            }
            for (let index7I = 3; index7I >= 1; index7I += -1) {



                led.plot(3, index7I)



            }
            for (let index8I = 3; index8I >= 1; index8I += -1) {



                led.plot(index8I, 1)



            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            // this plots the inner led pauses for 1/2 second then
            // clears the screen
            led.plot(2, 2)
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            // this repeats the second square to make it appear
            // the squares go in and then out
            for (let index52I = 1; index52I <= 3; index52I++) {



                led.plot(1, index52I)



            }
            for (let index62I = 2; index62I <= 3; index62I++) {



                led.plot(index62I, 3)



            }
            for (let index72 = 3; index72 >= 1; index72 += -1) {



                led.plot(3, index72)



            }
            for (let index82 = 3; index82 >= 1; index82 += -1) {



                led.plot(index82, 1)



            }
            basic.pause(500)
            basic.clearScreen()
            basic.pause(500)
            SquareTimeI += -500
        }
    }
    basic.clearScreen()
}
let F = 0
let SquareTimeI = 0
SquareTimeI = 2000
F = 0
