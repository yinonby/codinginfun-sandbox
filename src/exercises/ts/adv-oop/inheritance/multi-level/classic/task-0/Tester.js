import TestError from "../../../../../../../infra/test/TestError";
import { App, GamingApp, VideoGamingApp } from "./Exercise";

export class Tester {

  run() {
    this.testApp(App);
    this.testGamingApp(GamingApp);
    this.testVideoGamingApp(VideoGamingApp);
  }

  testApp(appClass) {
    const app = new appClass("FIFA");

    if (! app.getAppName) {
      throw new TestError(
        "Missing implementation: class App, method getAppName()");
    }
    if (app.getAppName() !== "FIFA") {
      throw new TestError(
        "class App, method getAppName() doesn't return the app name");
    }
  }

  testGamingApp(gamingAppClass) {
    const gamingApp = new gamingAppClass("FIFA", "Video");

    // verify inheritance
    if (! Object.getPrototypeOf(gamingAppClass).name === "App") {
      throw new TestError(
        "class GamingApp should extend class App");
    }

    // verify static member
    if (! gamingAppClass.GAME_TYPE_VIDEO) {
      throw new TestError(
        "class GamingApp, missing static member GAME_TYPE_VIDEO");
    }
    if (gamingAppClass.GAME_TYPE_VIDEO !== "Video") {
      throw new TestError(
        "class GamingApp, static member GAME_TYPE_VIDEO initialized with the wrong value");
    }

    // verify getter method
    if (! gamingApp.getGameType) {
      throw new TestError(
        "Missing implementation: class GamingApp, method getGameType()");
    }
    if (gamingApp.getGameType() !== "Video") {
      throw new TestError(
        "class GamingApp, getGameType() doesn't return the game type");
    }
  }

  testVideoGamingApp(videoGamingAppClass) {
    const videoGamingApp = new videoGamingAppClass("FIFA");

    // verify static member
    if (! videoGamingAppClass.VIDEO_GAME_GENRE_SPORTS) {
      throw new TestError(
        "class GamingApp, missing static member VIDEO_GAME_GENRE_SPORTS");
    }
    if (videoGamingAppClass.VIDEO_GAME_GENRE_SPORTS !== "Sports") {
      throw new TestError(
        "class GamingApp, static member VIDEO_GAME_GENRE_SPORTS initialized with the wrong value");
    }

    // verify inheritance
    if (! Object.getPrototypeOf(videoGamingAppClass).name === "GamingApp") {
      throw new TestError(
        "class VideoGamingApp should extend class GamingApp");
    }

    // verify correct game type
    if (videoGamingApp.getGameType() !== "Video") {
      throw new TestError(
        "class GamingApp, getGameType() should return \"Video\"");
    }
  }

}
