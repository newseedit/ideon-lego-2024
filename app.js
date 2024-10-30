// Import modules
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
// Use gobal variables to make these available in the program
let car = null;
let hub = null;

// Setup on keypress
let keypress = (await import('keypress')).default;
keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    try{
        // TODO: Use the command below to check which key is pressed
        //console.log('key pressed: ', key);
        if (key && key.ctrl && key.name == 'c') {
            if (hub){
                console.log("Disconnecting!");
                hub.disconnect();
            }
            process.exit(0);
        }
        else if (car){
            if (key.name == 'up'){
                // car move forward
                // TODO: call a function in the car object
            }
            if (key.name == 'left'){
                // car turn left
                // TODO: call a function in the car object
            }
            if (key.name == 'right'){
                // car turn right
                // TODO: call a function in the car object
            }
            if (key.name == 'down'){
                // car move backwards
                // TODO: call a function in the car object
            }
            if (key.name == 's'){
                // car stop
                // TODO: call a function in the car object
            }
            if (key.name == 'c'){
                // car run course
                // TODO: call a function in the car object
            }
        }
    }
    catch(e){
        console.log(e);
    }
});
process.stdin.setRawMode(true);
process.stdin.resume();

// Setup the connection to a Lego car
poweredUP.on("discover", async (data) => {
    // Get the hub
    hub = data.hub;
    // Get mac address from hub
    let mac = (await data.peripheral.getAddress()).toUpperCase();
    // Only connect to the correct car
    if ((hub.name == "Technic Hub") && (mac == searchMac)) {
        console.log(`Discovered ${hub.name} at `+mac+`!`);
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
        // Initialize the car
        car = new Car(hub, motorA, motorB, motorSteering);
        car.setZero();
    }
});
poweredUP.scan(); // Start scanning for Hubs
console.log("Scanning for Hubs...");
