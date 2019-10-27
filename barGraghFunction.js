//setting up the variable moisture_reading
let moisture_reading = 0
moisture_reading = 0

//bar gragh display function
function display() {
    //if takes the value in moisture_reading, remaps it to 0-4, rounds to a whole 
    //number then compairs it to an integer and displays the corresponding bar
    //graph if it equals 0 it clears the screen
    if (Math.round(Math.map(moisture_reading, 0, 1023, 0, 4)) == 4) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            `)
    } else if (Math.round(Math.map(moisture_reading, 0, 1023, 0, 4)) == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . # .
            . . # # .
            . # # # .
            `)
    } else if (Math.round(Math.map(moisture_reading, 0, 1023, 0, 4)) == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            . # # . .
            `)
    } else if (Math.round(Math.map(moisture_reading, 0, 1023, 0, 4)) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . # . . .
            `)
    } else {
        basic.clearScreen()
    }

}


