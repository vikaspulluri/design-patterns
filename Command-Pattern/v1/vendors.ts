export class Light {
  on() {
    console.log('Light On');
  }

  off() {
    console.log('Light Off');
  }
}

export class GarageDoor {
  up() {
    console.log('Garage Door Open');
  }

  down() {
    console.log('Garage Door Close');
  }

  stop() {
    console.log('Garage Door Stopped');
  }

  lightOn() {
    console.log('Garage Light On');
  }

  lightOff() {
    console.log('Garage Light Off');
  }
}