// car.js

export class Car {

    constructor(hub,motorA, motorB, motorSteering) {
        this.hub = hub;
        this.motorA = motorA;
        this.motorB = motorB;
        this.motorSteering = motorSteering;
        this.speed = 0;
        this.angle = 0;
        this.sendCommand = false; // avoid multiple speed changes
    }

    async runCourse() {
        console.log('Running course');
        // Add logic to run the course - example logic below
        // TODO: Call the functions in the correct order and use wait in between.
        this.moveForward();
        await this.sleep(1000);
        this.turnLeft();
        await this.sleep(1000);
        this.stop();
    }

    turnLeft() {
        console.log('Turning left');
        // Add logic to turn left using motors
        // TODO: Use this.gotoAngle();
    }

    turnRight() {
        console.log('Turning right');
        // Add logic to turn right using motors
        // TODO: Use this.gotoAngle();
    }

    moveForward() {
        console.log('Moving forward');
        // Add logic to move forward using motors
        // TODO: Use this.gotoAngle();
        // TODO: Use this.setSpeed();
    }

    moveBackward() {
        console.log('Moving backward');
        // Add logic to move backward using motors
        // TODO: Use this.setSpeed();
    }

    stop() {
        // Make the car stop
        console.log('Stopping');
        this.setSpeed(0);
    }

    /* Internal functions - do not edit these until you know what you are doing */

    async sleep(time){
        await this.hub.sleep(time);
    }

    async setSpeed(speed){
        if ((this.speed != speed)&&(!this.sendCommand)){
            this.sendCommand = true;
            this.speed = speed;
            await this.motorB.setPower(speed);
            await this.motorA.setPower(speed);
            this.sendCommand = false;
        }
    }
    async gotoAngle(angle){
        if ((this.angle != angle)&&(!this.sendCommand)){
            this.angle = angle;
            this.sendCommand = true;
            await this.motorSteering.gotoAngle(angle);
            this.sendCommand = false;
        }
    }

    async setZero(){
        await this.motorSteering.resetZero();
    }

}
