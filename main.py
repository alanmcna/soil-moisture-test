reading = 0

def love_you(t, f):
    basic.show_string("Hi " + t)
    for i in range(3):
        basic.show_icon(IconNames.HEART, 100)
        basic.pause(100)
        basic.clear_screen()
        basic.pause(100)
    basic.show_string("From " + f)

def read_soil_moisture():
    global reading
    reading = pins.analog_read_pin(AnalogPin.P0)
    led.plot_bar_graph(reading, 1023)
    if input.button_is_pressed(Button.A):
        basic.show_number(reading)

love_you("Vida", "Dad")
basic.forever(read_soil_moisture)