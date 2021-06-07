import { Amplifier, CDPlayer, DvdPlayer, Lights, Projector, Tuner, Screen } from "./sub-class";

export class HomeTheatreFacade {
  constructor(
    private amplifier: Amplifier,
    private tuner: Tuner,
    private dvdPlayer: DvdPlayer,
    private cdPlayer: CDPlayer,
    private lights: Lights,
    private projector: Projector,
    private screen: Screen
  ) {
    this.amplifier = amplifier;
    this.tuner = tuner;
    this.dvdPlayer = dvdPlayer;
    this.cdPlayer = cdPlayer;
    this.lights = lights;
    this.projector = projector;
    this.screen = screen;
  }

  watchMovie(movie: string) {
    console.log('Get ready to watch movie... ', movie);
    this.lights.dim(10);
    this.screen.down();
    this.projector.on();
    this.projector.wideScreenMode();
    this.amplifier.on();
    this.amplifier.setDVD(this.dvdPlayer);
    this.amplifier.setVolume(5);
    this.dvdPlayer.on();
    this.dvdPlayer.play(movie);
  }

  endMovie() {
    console.log('Shutting Movie Theatre down...');
    this.lights.on();
    this.screen.up();
    this.projector.off();
    this.amplifier.off();
    this.dvdPlayer.stop();
    this.dvdPlayer.eject();
    this.dvdPlayer.off();
  }
}