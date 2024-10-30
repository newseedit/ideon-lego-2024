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
        this.moveForward();
        console.log('Check 1');
        await this.sleep(1000);
        console.log('Check 2');
        this.turnLeft();
        await this.sleep(1000);
        console.log('Check 3');
        this.moveForward();
        await this.sleep(1000);
        console.log('Check 4');
        this.turnRight();
        await this.sleep(1000);
        console.log('Check 5');
        this.moveForward();
        await this.sleep(500);
        this.stop();
        console.log('Finish!');
    }

    turnLeft() {
        console.log('Turning left');
        // Add logic to turn left using motors
        this.gotoAngle(-90);
    }

    turnRight() {
        console.log('Turning right');
        // Add logic to turn right using motors
        this.gotoAngle(90);
    }

    async moveForward() {
        console.log('Moving forward');
        // Add logic to move forward using motors
        await this.gotoAngle(0);
        await this.setSpeed(50);
    }

    async moveBackward() {
        console.log('Moving backward');
        // Add logic to move backward using motors
        await this.setSpeed(-50);
    }

    async stop() {
        console.log('Stopping');
        // Add logic to stop the car
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
