import TestError from "../../../../../../../infra/test/TestError";
import { Tester as ClassicInheritanceTester } from "../../classic/task-0/Tester";
import {
  App,
  FifaApp,
  GamingApp,
  NbaApp,
  SportsVideoGamingApp,
  VideoGamingApp
} from "./Exercise";

export class Tester extends ClassicInheritanceTester{

  run() {
    this.testApp(App);
    this.testGamingApp(GamingApp);
    this.testVideoGamingApp(VideoGamingApp);
    this.testSportsVideoGamingApp(SportsVideoGamingApp);
    this.testFifaApp(FifaApp);
    this.testNbaApp(NbaApp);
  }

  testSportsVideoGamingApp(sportsVideoGamingAppClass) {
    const sportsVideoGamingApp = new sportsVideoGamingAppClass();

    if (! Object.getPrototypeOf(sportsVideoGamingAppClass).name === "VideoGamingApp") {
      throw new TestError(
        "class VideoGamingApp should extend class GamingApp");
    }
    if (! sportsVideoGamingApp.getGenre) {
      throw new TestError(
        "Missing implementation: class VideoGamingApp, method getGenre()");
    }
    if (sportsVideoGamingApp.getGenre() !== "Sports") {
      throw new TestError(
        "class VideoGamingApp, getGenre() should return \"Sports\"");
    }
  }

  testFifaApp(fifaAppClass) {
    const fifaApp = new fifaAppClass();

    if (! Object.getPrototypeOf(fifaAppClass).name === "SportsVideoGamingApp") {
      throw new TestError(
        "class VideoGamingApp should extend class GamingApp");
    }
    if (fifaApp.getAppName() !== "FIFA") {
      throw new TestError(
        "class FifaApp, appName should equal with \"FIFA\"");
    }
  }

  testNbaApp(nbaAppClass) {
    const nbaApp = new nbaAppClass();

    if (! Object.getPrototypeOf(nbaAppClass).name === "SportsVideoGamingApp") {
      throw new TestError(
        "class VideoGamingApp should extend class GamingApp");
    }
    if (nbaApp.getAppName() !== "NBA") {
      throw new TestError(
        "class FifaApp, appName should equal with \"NBA\"");
    }
  }

}
