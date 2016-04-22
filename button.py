import RPi.GPIO as GPIO
import subprocess
import time

GPIO.setmode(GPIO.BCM)

GPIO.setup(23, GPIO.IN, pull_up_down=GPIO.PUD_UP)

stateOn = False;
while True:
    input_state = GPIO.input(23)
    if input_state == False:
        print("GPIO pinssssss pushed")
        if stateOn == False:
            subprocess.call(["python", "on.py"])
            stateOn == True
            print("GPIO pin on Light")
        else:
            subprocess.call(["python", "off.py"])
            print("GPIO pin turn off light")
        time.sleep(0.1)