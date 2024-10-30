// car.js

export class Car {

    constructor(motorA, motorB, motorSteering) {
        this.motorA = motorA;
        this.motorB = motorB;
        this.motorSteering = motorSteering;
        this.speed = 0;
        this.angle = 0;
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

    setSpeed(speed){
        this.motorA.setSpeed(speed);
        this.motorB.setSpeed(speed);
    }
    setAngle(angle){
        this.motorSteering.gotoAngle(angle);
    }
}
