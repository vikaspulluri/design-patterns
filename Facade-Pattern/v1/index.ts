import { HomeTheatreFacade } from "./HomeTheatreFacade";
import { Amplifier, CDPlayer, DvdPlayer, Lights, Projector, Screen, Tuner } from "./sub-class";

const amp = new Amplifier();
const tuner = new Tuner();
const dvd = new DvdPlayer();
const cd = new CDPlayer();
const projector = new Projector();
const screen = new Screen();
const lights = new Lights();
const homeTheatre = new HomeTheatreFacade(amp, tuner, dvd, cd, lights, projector, screen);

homeTheatre.watchMovie('Interstellar');