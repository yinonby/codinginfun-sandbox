
class App {
}

class GamingApp extends App {
}

class VideoGamingApp extends GamingApp {
}

export class Tester {

  public run(): number {
    return this.test1();
  }

  private test1(): number {
    let videoGamingApp: VideoGamingApp;

    /* remove this line ***********
    videoGamingApp = new VideoGamingApp("FIFA");

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

    return 0;
    *********** remove this entire line as well*/ return -1;
  }

}