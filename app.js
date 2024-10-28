import PoweredUP from "node-poweredup";
import {GlobalKeyboardListener} from "node-global-key-listener";
import {Car} from "./car.js";
const poweredUP = new PoweredUP.PoweredUP();
const v = new GlobalKeyboardListener();
poweredUP.on("discover", async (hub) => { // Wait to discover a Hub
    console.log(`Discovered ${hub.name}!`);
    if (hub.name == "Technic Hub") {
        await hub.connect(); // Connect to the Hub
        console.log("Connected");
        console.log("Setting up motors...");
        console.log("Checking motor A...")
        const motorA = await hub.waitForDeviceAtPort("A");
        console.log("Checking motor B...")
        const motorB = await hub.waitForDeviceAtPort("B");
        console.log("Checking motor D...")
        const motorSteering = await hub.waitForDeviceAtPort("D");
        console.log(hub.batteryLevel);
        // TODO: add code to control motors
        const car = new Car(motorA, motorB, motorSteering);

        car.moveForward();
        car.turnLeft();
        car.turnRight();
        car.moveBackward();
        car.stop();
    }
});
poweredUP.scan(); // Start scanning for Hubs
console.log("Scanning for Hubs...");