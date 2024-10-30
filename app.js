import PoweredUP from "inimi-poweredup";
import {Car} from "./car.js";

// Setup LEGO
const poweredUP = new PoweredUP();
let found = false;
// Modify for each machine
let searchMac1 = '90:84:2B:6D:76:41'; // 1
let searchMac2 = '90:84:2B:7D:10:F0'; // 2
let searchMac3 = '90:84:2B:6F:9D:0A'; // 3
let searchMac = searchMac2;
let car = null;
let hub = null;

let keypress = (await import('keypress')).default;
// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    try{
        //console.log('key pressed: ', key);
        if (key && key.ctrl && key.name == 'c') {
            if (hub){
                console.log("Disconnecting!");
                hub.disconnect();
            }
            process.stdin.pause();
            process.exit(0);
        }
        else if (car){
            if (key.name == 'up'){
                car.moveForward();
            }
            if (key.name == 'left'){
                car.gotoAngle(-90);
            }
            if (key.name == 'right'){
                car.gotoAngle(90);
            }
            if (key.name == 'down'){
                car.setSpeed(-50);
            }
            if (key.name == 's'){
                car.setSpeed(0);
            }
            if (key.name == 'c'){
                car.runCourse();
            }
        }
    }
    catch(e){
        console.log(e);
    }
});
process.stdin.setRawMode(true);
process.stdin.resume();

poweredUP.on("discover", async (data) => { // Wait to discover a Hub
    // get the hub
    hub = data.hub;
    // get mac address from hub
    let mac = (await data.peripheral.getAddress()).toUpperCase();
    if ((hub.name == "Technic Hub") && (mac == searchMac)) {
        console.log(`Discovered ${hub.name} at `+hubMac+`!`);
        console.log("Found mathing hub");
        await hub.connect(); // Connect to the Hub
        console.log("Connected");
        console.log("Setting up motors...");18
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
        car = new Car(hub, motorA, motorB, motorSteering);
        car.setZero();
    }
});

poweredUP.scan(); // Start scanning for Hubs
console.log("Scanning for Hubs...");
