import { CeilingFan, GarageDoor, Light, Stereo } from "./vendors";

export interface Command {
  execute(): void;
  undo(): void;
}

export class NoCommand implements Command {
  execute() {}
  undo() {}
}

export class LightOnCommand implements Command {
  constructor(private light: Light) {
    this.light = light;
  }

  execute() {
    this.light.on();
  }

  undo() {
    this.light.off();
  }
}

export class LightOffCommand implements Command {
  constructor(private light: Light) {
    this.light = light;
  }

  execute() {
    this.light.off();
  }

  undo() {
    this.light.on();
  }
}

export class GarageDoorUpCommand implements Command {
  constructor(private garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }
  execute() {
    this.garageDoor.up();
  }

  undo() {
    this.garageDoor.down();
  }
}

export class GarageDoorDownCommand implements Command {
  constructor(private garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }
  execute() {
    this.garageDoor.down();
  }
  undo() {
    this.garageDoor.up();
  }
}

export class GarageDoorStopCommand implements Command {
  constructor(private garageDoor: GarageDoor) {
    this.garageDoor = garageDoor;
  }
  execute() {
    this.garageDoor.stop();
  }

  undo() {
    this.garageDoor.down();
  }
}

export class StereoOnWithCDCommand implements Command {
  constructor(private stereo: Stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.on();
    this.stereo.setCD();
    this.stereo.setVolume(10);
  }

  undo() {
    this.stereo.setVolume(0);
    this.stereo.off();
  }
}

export class StereoOffCommand implements Command {
  constructor(private stereo: Stereo) {
    this.stereo = stereo;
  }

  execute() {
    this.stereo.off();
  }

  undo() {
    this.stereo.on();
  }
}

export class CeilingFanOnCommand implements Command {
  constructor(private ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute() {
    this.ceilingFan.on();
  }

  undo() {
    this.ceilingFan.off();
  }
}

export class CeilingFanOffCommand implements Command {
  constructor(private ceilingFan: CeilingFan) {
    this.ceilingFan = ceilingFan;
  }

  execute() {
    this.ceilingFan.off();
  }

  undo() {
    this.ceilingFan.on();
  }
}
