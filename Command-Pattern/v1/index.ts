import { GarageDoorUpCommand, LightOnCommand } from "./Command";
import { SimpleRemoteControl } from "./RemoteControl";
import { GarageDoor, Light } from "./vendors";

const remote = new SimpleRemoteControl();
const light = new Light();
const lightOn = new LightOnCommand(light);

remote.setCommand(lightOn);
remote.buttonPressed();

const garageDoor = new GarageDoor();
const garageDoorOpen = new GarageDoorUpCommand(garageDoor);

remote.setCommand(garageDoorOpen);
remote.buttonPressed();