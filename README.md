# Ideon Coder Kids 2024

This is a repository for NewSeeds challange for the the Ideon Coder Kids 2024.

## Links

https://www.npmjs.com/package/node-poweredup

## General tips for coding

The word "this" is used for reference to an object itself. In the example we use a car. When we are
inside the car object and want to call a function "on ourselves" we use "this".

Another special word is "await" which is used for commands that take time to fullfill. For example
the wait command will take time. By using "await" the code will "wait" until the command is done before
continuing. Without "await" the code will execute without delay.

The first command called when the car is connected is "setZero()". Make sure the wheels are facing
straight forward when this command is executed otherwise the steering will be off.

You need to navigate three windows. The code editor (Visual Studio Code), the command line (Terminal),
and the documentation in a web browser (Firefox, this file).

Edit the file. Don't forget to save. Test your code by running this command in the terminal:

```
node app.js
```

## Assignment 1

Make the car run a track by programming the commands for movement and calling them in the right order.

They key S is bound to stopping the car.

The key C is bound to "running the course".

Inside the file car.js edit the function runCourse() to complete the course.

In order for this function to work you must also edit all the commands for the car (except stop() which is already defined).

## Assignment 2

Create event based steering using arrow keys and steer the car.

In app.js there are keys that capture the arrow keys. Add function calls for the car object to the correct command.

## Assignment 3 (advanced)

Can you improve the smoothness of the steering? Examples:

* Make it possible to run at multiple speeds
* Make it turn by different amounts
* Ramp up speed smoothly

## Solutions

Don't spoil your assignments, but a suggested solution for assignment 1 ad 2 can be found here:
https://github.com/newseedit/ideon-lego-2024/tree/solution

