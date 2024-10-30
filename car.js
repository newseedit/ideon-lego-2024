// car.js

export class Car {

    constructor(motorA, motorB, motorSteering) {
        this.motorA = motorA;
        this.motorB = motorB;
        this.motorSteering = motorSteering;
    }

    runCourse() {
        console.log('Running course');
        // Add logic to run the course
    }

    turnLeft() {
        console.log('Turning left');
        // Add logic to turn left using motors
    }

    turnRight() {
        console.log('Turning right');
        // Add logic to turn right using motors
    }

    moveForward() {
        console.log('Moving forward');
        // Add logic to move forward using motors
    }

    moveBackward() {
        console.log('Moving backward');
        // Add logic to move backward using motors
    }

    stop() {
        console.log('Stopping');
        // Add logic to stop the car
    }
}
