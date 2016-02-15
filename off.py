#!/usr/bin/sudo /usr/bin/python
import time
import RPi.GPIO as GPIO

GPIO.setmode(GPIO.BCM)

pins_light = [2,3]

GPIO.setup(pins_light, GPIO.OUT)
try:
    GPIO.output(pins_light, False)
except:
    GPIO.cleanup()