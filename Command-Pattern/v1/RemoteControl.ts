import { Command } from "./Command";

export class SimpleRemoteControl {
  slot: Command;

  public setCommand(command: Command) {
    this.slot = command;
  }

  public buttonPressed() {
    this.slot.execute();
  }
}