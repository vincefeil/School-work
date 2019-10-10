//This program is used when I want a button to be pushed and held to initiate an action
function unlock () { //this function is called when the variable lockCount is > 2000 and shows the string "U"
    //then is sets the variable back to 0
    lockCount = 0
    basic.showString("U")
    //pause for 2 seconds then go back to the forever loop
    basic.pause(2000)
}
let lockCount = 0
lockCount = 0
basic.forever(function () {
    //while in the forever loop it moniters variable lockCount. While under 2000 it will add 1 to the variable and display
    // "L". when it excedes 2000 it calls the function unlock.
    if (lockCount < 2000) {
        while (input.buttonIsPressed(Button.A)) {
            if (lockCount >= 2000) {
                unlock()
            } else {
                lockCount += 1
            }
        }
        basic.showString("L")
    }
})
