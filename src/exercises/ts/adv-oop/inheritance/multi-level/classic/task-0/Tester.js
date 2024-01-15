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

    if (! Object.getPrototypeOf(gamingAppClass).name === "App") {
      throw new TestError(
        "class GamingApp should extend class App");
    }
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

    if (! Object.getPrototypeOf(videoGamingAppClass).name === "GamingApp") {
      throw new TestError(
        "class VideoGamingApp should extend class GamingApp");
    }
    if (videoGamingApp.getGameType() !== "Video") {
      throw new TestError(
        "class GamingApp, getGameType() should return \"Video\"");
    }
  }

}
