import { DinerMenu } from "./DinerMenu";
import { PancakeHouseMenu } from "./PancakeHouseMenu";
import { Waitress } from "./Waitress";

const pancakeMenu = new PancakeHouseMenu();
const dinerMenu = new DinerMenu();

const waitress = new Waitress(pancakeMenu, dinerMenu);
waitress.printMenu();
