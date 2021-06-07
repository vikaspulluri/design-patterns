export class Amplifier {
  dvd: DvdPlayer;
  cd: CDPlayer;
  on() {
    console.log('Amplifier On');
  }

  setDVD(dvd: DvdPlayer) {
    this.dvd = dvd;
    console.log('Set DVD');
  }

  setVolume(value: number) {
    console.log('Amplifier Sound: ', value);
  }

  off() {
    console.log('Amplifier Off');
  }
}

export class Tuner {

}

export class DvdPlayer {
  on() {
    console.log('DVD On');
  }

  off() {
    console.log('DVD Off');
  }

  play(movie: string) {
    console.log('Playing movie: ', movie);
  }

  stop() {
    console.log('DVD Stop');
  }

  eject() {
    console.log('DVD Eject');
  }
}

export class CDPlayer {}

export class Projector {
  on() {
    console.log('Projector On');
  }

  off() {
    console.log('Projector Off');
  }

  wideScreenMode() {
    console.log('Wide Screen Mode Enabled');
  }
}

export class Lights {
  dim(value: number) {
    console.log('Lights Dimmed: ', value);
  }

  on() {
    console.log('Lights on');
  }

  off() {
    console.log('Lights Off');
  }
}

export class Screen {
  down() {
    console.log('Screen Down');
  }

  up() {
    console.log('Screen Up');
  }
}
