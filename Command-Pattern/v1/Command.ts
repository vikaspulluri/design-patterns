import { GarageDoor, Light } from "./vendors";

export interface Command {
  execute(): void;
}

export class LightOnCommand implements Command {
  constructor(private light: Light) {
    this.light = light;
  }

  execute() {
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
}