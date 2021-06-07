export class Light {
  constructor(private name?: string) {
    this.name = name || '';
  }
  on() {
    console.log(`${this.name} ` + 'Light On');
  }

  off() {
    console.log(`${this.name} ` + 'Light Off');
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

export class Stereo {
  constructor(private name?: string) {
    this.name = name || '';
  }
  on() {
    console.log(`${this.name} ` + 'Stereo On');
  }

  off() {
    console.log(`${this.name} ` + 'Stereo Off');
  }

  setCD() {
    console.log(`${this.name} ` + 'Stereo Set CD');
  }

  setDVD() {
    console.log(`${this.name} ` + 'Stereo Set DVD');
  }

  setRadio() {
    console.log(`${this.name} ` + 'Stereo Set Radio');
  }

  setVolume(value: number) {
    console.log(`${this.name} ` + 'Stereo Set Volume: ', value);
  }
}

export class CeilingFan {
  constructor(private name?: string) {
    this.name = name || '';
  }
  on() {
    console.log(`${this.name} Ceiling Fan On`);
  }

  off() {
    console.log(`${this.name} Ceiling Fan Off`);
  }
}