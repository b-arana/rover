// Define an object "rover"
var rover = {
  direction: "N",// Default direction
  xPosition: 0, // Columns
  yPosition: 0, // Rows 
  travelLog: []
}
var rover2 = {
  direction: "N",
  xPosition:9,
  yPosition:9,
  travelLog:[]
}

// Grip 10X10

var field = [
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
  ["---", "---", "---", "---", "---", "---", "---", "---", "---", "---"],
];

// Creating obstacles in our grip

field[2][5] = "WALL";
field[6][2] = "WALL";
field[1][6] = "WALL";
field[8][4] = "WALL";


// Define a grip with obstacules

console.log(field);


// This function allows a rover to turn right  
function turnRight(rover) {
  console.log("Actual Direction: " + rover.direction);
  console.log("Instruction: Turns right ");

  switch (rover.direction) {

    case "N":
      console.log("Rover turns right and now is facing East");
      rover.direction = "E";
      break;
    case "E":
      console.log("Rover turns right and now is facing South");
      rover.direction = "S";
      break;
    case "S":
      console.log("Rover turns right and now is facing West");
      rover.direction = "W";
      break;
    case "W":
      console.log("Rover turns right and now is facing North");
      rover.direction = "N";
      break;
    default:
      console.log("No exit this direction")
      break;

  }
  console.log("Now the new direction is " + rover.direction); // Indicating the new facing direction
};
// This function allows a rover to turn left 
function turnLeft(rover) {
  console.log("Actual Direction: " + rover.direction);
  console.log("Instruction: Turns left ");

  switch (rover.direction) {
    case "N":
      console.log("Rover turns left and now is facing West");
      rover.direction = "W";
      break;
    case "E":
      console.log("Rover turns left and now is facing Noth");
      rover.direction = "N";
      break;
    case "S":
      console.log("Rover turns left and now is facing East");
      rover.direction = "E";
      break;
    case "W":
      console.log("Rover turns left and now is facing South");
      rover.direction = "S";
      break;
    default:
      console.log("No exit this direction")
      break;
  }
  console.log("Now the new direction is " + rover.direction); // Indicating the new facing direction
};
// Declare a function to record a tracking.

function tracking(rover) {

  rover.travelLog.push("Coordinate:", rover.yPosition, rover.xPosition);
  return rover.travelLog

};

// Declare a function for checking if there are obstacules and if the rover is inside of the field

function checking(rover) {

  if (rover.yPosition >= 0 && rover.yPosition <= 9 && rover.xPosition >= 0 && rover.xPosition <= 9) {
    if (field[rover.yPosition][rover.xPosition] !== "WALL") {

      console.log("Rover inside the field and there are not obstacules");
      console.log("The rover's position after his moves is: " + " Row: " + rover.yPosition + " Column: " + rover.xPosition);
      return tracking(rover); // Recording the track for this moves and showing the coordinates of the rover

    } else {
      console.log("Rover can not move, there are a WALL!!!");
      switch (rover.direction) {
        case "N":
          rover.yPosition++;
          break;
        case "E":
          rover.xPosition--;
          break;
        case "S":
          rover.yPosition--;
          break;
        case "W":
          rover.yPosition++;
          break;
        default:
          break;
      }
    }
  } else {
    console.log("Rover can not move outside of the field");
    switch (rover.direction) {
      case "N":
        rover.yPosition++;
        break;
      case "E":
        rover.xPosition--;
        break;
      case "S":
        rover.yPosition--;
        break;
      case "W":
        rover.yPosition++;
        break;
      default:
        break;
    }
  }
}


// This function permits a rover goes forward  
function moveForward(rover) {

  console.log("Instruction: goes forward");
  console.log("Actual direction: " + rover.direction);
  console.log("Actual position: " + " Row: " + rover.yPosition + " Column: " + rover.xPosition);


  switch (rover.direction) {
    case "N":
      console.log("Rover goes forward ...");
      rover.yPosition--;
      break;
    case "E":
      console.log("Rover goes forward ...");
      rover.xPosition++;
      break;
    case "S":
      console.log("Rover goes forward ...");
      rover.yPosition++;
      break;
    case "W":
      console.log("Rover goes forward ...");
      rover.xPosition--;
      break;
    default:
      console.log("Error command");
      break;
  }
  return checking(rover);

}


//This funcion allows a rover goes backwards
function moveBackward(rover) {

  console.log("Instruction: goes backward");
  console.log("Actual direction: " + rover.direction);
  console.log("Actual position: " + " Row: " + rover.yPosition + " Column: " + rover.xPosition);


  switch (rover.direction) {
    case "N":
      console.log("Rover goes forward ...");
      row++;
      break;
    case "E":
      console.log("Rover goes forward ...");
      column--;
      break;
    case "S":
      console.log("Rover goes forward ...");
      row--;
      break;
    case "W":
      console.log("Rover goes forward ...");
      column++;
      break;
    default:
      console.log("Error command");
      break;
  }

  return checking(rover);
};

//Creating an iteration of the Commands

var command = "rffrfflfrff";

function goCommand(rover) {

  for (var i = 0; i < command.length - 1; i++) {
    var currentCommand = command[i];

    if (currentCommand === "r") {
      turnRight(rover);
    } else if (currentCommand === "f") {
      moveForward(rover);
    } else if (currentCommand === "l") {
      turnLeft(rover);
    } else if (currentCommand === "b") {
      moveBackward();
    } else if (currentCommand !== "f", "b", "r", "l") {
      console.log("Please introduce again a command.You must use only f,b,r ou l.Thank you");
      return false;
    }
  }
}

goCommand(rover);
