import TestError from "../../../../../../../infra/test/TestError";
import { App, VideoGamingApp } from "./Exercise";

export class Tester {

  run() {
    this.testApp();
    this.testGamingApp();
    this.testVideoGamingApp();
  }

  testApp() {
    const app = new App("FIFA");

    if (! app.getAppName) {
      throw new TestError(
        "class App, missing implementation: method getAppName()");
    }
    if (app.getAppName() !== "FIFA") {
      throw new TestError(
        "class App, method getAppName() doesn't return the app name");
    }
  }

  testGamingApp(GamingApp) {
    const gamingApp = new GamingApp(APP_NAME_FIFA, GamingApp.GAME_TYPE_VIDEO);

    // verify inheritance
    if (! Object.getPrototypeOf(GamingApp).name === "App") {
      throw new TestError(
        "class GamingApp should extend class App");
    }

    // verify static member
    if (! GamingApp.GAME_TYPE_VIDEO) {
      throw new TestError(
        "class GamingApp, missing static member GAME_TYPE_VIDEO");
    }
    if (GamingApp.GAME_TYPE_VIDEO !== "Video") {
      throw new TestError(
        "class GamingApp, static member GAME_TYPE_VIDEO initialized with the wrong value");
    }

    // verify getter method
    if (! gamingApp.getGameType) {
      throw new TestError(
        "class GamingApp, missing implementation: method getGameType()");
    }
    if (gamingApp.getGameType() !== "Video") {
      throw new TestError(
        "class GamingApp, getGameType() doesn't return the game type");
    }

    // verify correct initialization of parent appName
    if (gamingApp.getAppName() !== APP_NAME_FIFA) {
      throw new TestError(
        "class GamingApp, appName should equal with \"FIFA\"");
    }
  }

  testVideoGamingApp() {
    const videoGamingApp = new VideoGamingApp(APP_NAME_FIFA);

    // verify inheritance
    if (! Object.getPrototypeOf(VideoGamingApp).name === "GamingApp") {
      throw new TestError(
        "class VideoGamingApp should extend class GamingApp");
    }

    // verify correct initialization of parent appName
    if (videoGamingApp.getAppName() !== APP_NAME_FIFA) {
      throw new TestError(
        "class VideoGamingApp, appName should equal with \"FIFA\"");
    }

    // verify correct initialization of parent gameType
    if (videoGamingApp.getGameType() !== GamingApp.GAME_TYPE_VIDEO) {
      throw new TestError(
        "class VideoGamingApp, should initialize parent using GamingApp.GAME_TYPE_VIDEO for gameType");
    }
  }

}
