import RPi.GPIO as GPIO
import time
import os
import subprocess
sensor = 23
GPIO.setmode(GPIO.BCM)
GPIO.setup(sensor, GPIO.IN, GPIO.PUD_DOWN)

stateOn = False

while True:
    input_state = GPIO.input(23)
    if input_state == False:
        print("GPIO pinssssss pushed")
        if stateOn == False:
            subprocess.call(["python", "on.py"])
            stateOn = True
            print("GPIO pin on Light")
        else:
            subprocess.call(["python", "off.py"])
            stateOn = False
            print("GPIO pin turn off light")
        time.sleep(.8)