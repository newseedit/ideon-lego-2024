import PoweredUP from "inimi-poweredup";
import {Car} from "./car.js";

// Setup LEGO
const poweredUP = new PoweredUP();
let found = false;
// Modify for each machine
let searchMac1 = '90:84:2B:6D:76:41'; // 1
let searchMac2 = '90:84:2B:7D:10:F0'; // 2
let searchMac3 = '90:84:2B:6F:9D:0A'; // 3
let searchMac = searchMac1;

let keyboard = (await import('keyboard')).default;
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    console.log('key pressed: ', key);
    if (key && key.ctrl && key.name == 'c') {
        process.stdin.pause();
        process.exit(0);
    }
});

poweredUP.on("discover", async (data) => { // Wait to discover a Hub
    // get the hub
    let hub = data.hub;
    // get mac address from hub
    let hubMac = (await data.peripheral.getAddress()).toUpperCase();
    console.log(`Discovered ${hub.name} at `+hubMac+`!`);
    if ((hub.name == "Technic Hub") && (hubMac == searchMac)) {
        console.log("Found mathing hub");
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
