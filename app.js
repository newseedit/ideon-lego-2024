import PoweredUP from "inimi-poweredup";
import {Car} from "./car.js";

// Setup LEGO
const poweredUP = new PoweredUP();
let found = false;
// Modify for each machine
let searchMac = '90:84:2B:6D:76:41';

poweredUP.on("discover", async (hub) => { // Wait to discover a Hub
    // get mac address from hub
    let hubMac = (await DataTransfer.peripheral.getAddress()).toUpperCase();
    console.log(`Discovered ${hub.name} at `+hubMac+`!`);
    if ((hub.name == "Technic Hub") && (hubMac == searchMac)) {
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
        // Stop scanning for new devices
        poweredUP.stop();
        // TODO: add code to control motors
        const car = new Car(motorA, motorB, motorSteering);

        car.runCourse();

    }
});
poweredUP.scan(); // Start scanning for Hubs
console.log("Scanning for Hubs...");
