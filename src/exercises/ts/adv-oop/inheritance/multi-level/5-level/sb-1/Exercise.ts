
const APP_NAME_FIFA: string = "FIFA";
const APP_NAME_NBA: string = "NBA";

class App {
  constructor(private appName: string) {
  }

  public getAppName(): string {
    return this.appName;
  }
}

class GamingApp extends App {
  public static GAME_TYPE_VIDEO: string = "Video";

  constructor(appName: string, private gameType: string) {
    super(appName);
  }

  public getGameType(): string {
    return this.gameType;
  }
}

class VideoGamingApp extends GamingApp {
  public static VIDEO_GAME_GENRE_SPORTS: string = "Sports";

  constructor(appName: string, private genre: string) {
    super(appName, GamingApp.GAME_TYPE_VIDEO);
  }

  public getGenre(): string {
    return this.genre;
  }
}

class SportsVideoGamingApp {
}

class FifaApp {
}

class NbaApp {
}

/* do not change anything below this line */
export {
  APP_NAME_FIFA, APP_NAME_NBA,
  App, FifaApp, GamingApp, NbaApp, SportsVideoGamingApp, VideoGamingApp
};

