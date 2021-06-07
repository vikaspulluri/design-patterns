import { Command, NoCommand } from "./Command";

export class RemoteControl {
  onCommands: Command[] = new Array(7);
  offCommands: Command[] = new Array(7);
  undoCommand: Command;
  constructor() {
    const noCommand: Command = new NoCommand();
    this.onCommands.forEach((val, index) => {
      this.onCommands[index] = noCommand;
      this.offCommands[index] = noCommand;
    });
    this.undoCommand = noCommand;
  }

  setCommand(slot: number, onCommand: Command, offCommand: Command) {
    this.onCommands[slot] = onCommand;
    this.offCommands[slot] = offCommand;
  }

  onButtonPress(slot: number) {
    this.onCommands[slot].execute();
    this.undoCommand = this.onCommands[slot];
  }

  offButtonPress(slot: number) {
    this.offCommands[slot].execute();
    this.undoCommand = this.offCommands[slot];
  }

  undoButtonPress() {
    this.undoCommand.undo();
  }
}