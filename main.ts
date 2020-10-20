let reading = 0
function love_you(t: string, f: string) {
    basic.showString("Hi " + t)
    for (let i = 0; i < 3; i++) {
        basic.showIcon(IconNames.Heart, 100)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    basic.showString("From " + f)
}

love_you("Vida", "Dad")
basic.forever(function read_soil_moisture() {
    
    reading = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(reading, 1023)
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(reading)
    }
    
})
