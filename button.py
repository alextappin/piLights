import RPi.GPIO as GPIO
import subprocess
import time

GPIO.setmode(GPIO.BCM)

GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_UP)

stateOn = False;
while True:
    input_state = GPIO.input(23)
    if input_state == False:
        if stateOn == False:
            subprocess.call(["python", "on.py"])
            stateOn == True
        else:
            subprocess.call(["python", "off.py"])
        time.sleep(0.1)