import { VideoGamingApp } from "./Exercise";

export class Tester {

  run() {
    this.test1();
  }

  test1() {
    const videoGamingApp = new VideoGamingApp("FIFA");

    if (videoGamingApp.getAppName() !== "FIFA") {
      throw new Error(
        "App was created with the wrong appName!"
      );
    }

    if (videoGamingApp.getGameType() !== "Video") {
      throw new Error(
        "App was created with the wrong gameType!"
      );
    }
  }

}
