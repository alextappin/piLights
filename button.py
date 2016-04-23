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
        if stateOn == False:
            subprocess.call(["python", "on.py"])
            stateOn = True
        else:
            subprocess.call(["python", "off.py"])
            stateOn = False
        time.sleep(.8)