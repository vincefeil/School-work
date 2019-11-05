function runnig() {
    while (Cal1 == 3) {
        basic.showString("Running")
    }
}
input.onButtonPressed(Button.B, function () {
    Cal1 = 0
})
function setup() {
    while (Cal1 < 3) {
        if (Cal1 == 0) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 1
                basic.showNumber(Cal1)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showIcon(IconNames.Sword)
        }
        if (Cal1 == 1) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 2
                basic.showNumber(Cal1)
                basic.pause(500)
                basic.clearScreen()
            }
            basic.showIcon(IconNames.Sword)
        }
        if (Cal1 == 2) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 3
                basic.showNumber(Cal1)
                basic.pause(500)
                basic.clearScreen()
            }
        }
        if (Cal1 == 3) {
            if (input.buttonIsPressed(Button.A)) {
                Cal1 = 3
                basic.showNumber(Cal1)
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
    }
}
let Cal1 = 0
setup()
