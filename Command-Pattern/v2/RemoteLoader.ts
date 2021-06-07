import { LightOnCommand, GarageDoorUpCommand } from "./Command";
import { Light, GarageDoor } from "./vendors";
import { LightOffCommand, CeilingFanOnCommand, CeilingFanOffCommand, GarageDoorDownCommand, StereoOnWithCDCommand, StereoOffCommand } from "./Command";
import { RemoteControl } from "./RemoteControl";
import { CeilingFan, Stereo } from "./vendors";

export class RemoteLoader {
  constructor() {}

  load() {
    const remoteControl = new RemoteControl();

    const livingRoomLight = new Light('Living Room');
    const kitchenLight = new Light('Kitchen');
    const ceilingFan = new CeilingFan('Living Room');
    const garageDoor = new GarageDoor();
    const stereo = new Stereo('Hall');

    const livingRoomLightOn = new LightOnCommand(livingRoomLight);
    const livingRoomLightOff = new LightOffCommand(livingRoomLight);
    const kitchenLightOn = new LightOnCommand(kitchenLight);
    const kitchenLightOff = new LightOffCommand(kitchenLight);

    const ceilingFanOn = new CeilingFanOnCommand(ceilingFan);
    const ceilingFanOff = new CeilingFanOffCommand(ceilingFan);

    const garageDoorUp = new GarageDoorUpCommand(garageDoor);
    const garageDoorDown = new GarageDoorDownCommand(garageDoor);

    const stereoOnWithCD = new StereoOnWithCDCommand(stereo);
    const stereoOff = new StereoOffCommand(stereo);

    remoteControl.setCommand(0, livingRoomLightOn, livingRoomLightOff);
    remoteControl.setCommand(1, kitchenLightOn, kitchenLightOff);
    remoteControl.setCommand(2, ceilingFanOn, ceilingFanOff);
    remoteControl.setCommand(3, garageDoorUp, garageDoorDown);
    remoteControl.setCommand(4, stereoOnWithCD, stereoOff);

    remoteControl.onButtonPress(0);
    remoteControl.onButtonPress(2);
    remoteControl.offButtonPress(2);
    remoteControl.offButtonPress(0);
    remoteControl.onButtonPress(3);
    remoteControl.offButtonPress(3);
    remoteControl.onButtonPress(1);
    remoteControl.offButtonPress(1);
    remoteControl.undoButtonPress();

  }
}