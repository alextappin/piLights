import RPi.GPIO as GPIO
import time
import os
import subprocess
sensor = 22
GPIO.setmode(GPIO.BCM)
GPIO.setup(sensor, GPIO.IN, GPIO.PUD_DOWN)

p = False
c = False

while True:
    time.sleep(0.1)
    p = c
    c = GPIO.input(sensor)
    if c != p:
        n = "High" if c else "Low"
        print("GPIO pin %s is %s" % (sensor, n))
    if c:
        subprocess.call(["python", "on.py"])
    #else:
        #subprocess.call(["python", "off.py"])