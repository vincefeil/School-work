function runnig() {
    while (Cal1 == 6) {
        basic.showString("Running")
    }
}
input.onButtonPressed(Button.B, function () {
    Cal1 = 0
})
function setup() {
    while (Cal1 < 6) {
        if (Cal1 == 0) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 1
                basic.showNumber(1)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (Cal1 == 1) {
            if (Cal1) {
                Cal1 = 2
                basic.showNumber(2)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        }
        if (Cal1 == 2) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 3
                basic.showNumber(3)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 3) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 4
                basic.showNumber(1)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 4) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 5
                basic.showNumber(2)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 5) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 6
                basic.showNumber(3)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        }
        if (Cal1 == 6) {
            basic.showString("Hello!")
            runnig()
        }
    }
}
let Cal1 = 0
setup()
