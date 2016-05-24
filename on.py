 #!/usr/bin/sudo /usr/bin/python
import RPi.GPIO as GPIO #GPIO LIBRARY

GPIO.setmode(GPIO.BCM) #GPIO CONFIGURATION

pins_light = [2,3] #PIN NUMBERS FOR IN AND VCC

GPIO.setup(pins_light, GPIO.OUT) #SETUP FOR PINS AND TYPE (OUT)
try:
    GPIO.output(pins_light, True) #TURN pins_light PINS ON (VCC AND IN)
except:
    GPIO.cleanup() #CLEANUP EXCEPTION
