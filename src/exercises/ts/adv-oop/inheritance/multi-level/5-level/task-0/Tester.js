import TestError from "../../../../../../../infra/test/TestError";
import {
  APP_NAME_FIFA,
  APP_NAME_NBA,
  FifaApp,
  GamingApp,
  NbaApp,
  SportsVideoGamingApp,
  VideoGamingApp,
} from "./Exercise";

export class Tester {

  run() {
    this.testVideoGamingApp();
    this.testSportsVideoGamingApp();
    this.testFifaApp();
    this.testNbaApp();
  }

  testVideoGamingApp() {
    const videoGamingApp =
      new VideoGamingApp(APP_NAME_FIFA, VideoGamingApp.VIDEO_GAME_GENRE_SPORTS);

      // verify inheritance
      if (! Object.getPrototypeOf(VideoGamingApp).name === "GamingApp") {
        throw new TestError(
          "class VideoGamingApp should extend class GamingApp");
      }

    // verify static member
    if (! VideoGamingApp.VIDEO_GAME_GENRE_SPORTS) {
      throw new TestError(
        "class VideoGamingApp, missing static member VIDEO_GAME_GENRE_SPORTS");
    }
    if (VideoGamingApp.VIDEO_GAME_GENRE_SPORTS !== "Sports") {
      throw new TestError(
        "class VideoGamingApp, static member VIDEO_GAME_GENRE_SPORTS " +
        "initialized with the wrong value");
    }

    // verify getter method
    if (! videoGamingApp.getGenre) {
      throw new TestError(
        "class VideoGamingApp, missing implementation: method getGenre()");
    }
    if (videoGamingApp.getGenre() !== VideoGamingApp.VIDEO_GAME_GENRE_SPORTS) {
      throw new TestError(
        "class VideoGamingApp, getGenre() doesn't return the game type");
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

  testSportsVideoGamingApp() {
    const sportsVideoGamingApp = new SportsVideoGamingApp(APP_NAME_FIFA);

    // verify inheritance
    if (! Object.getPrototypeOf(SportsVideoGamingApp).name === "VideoGamingApp") {
      throw new TestError(
        "class SportsVideoGamingApp should extend class GamingApp");
    }

    // verify correct initialization of parent appName
    if (sportsVideoGamingApp.getAppName() !== APP_NAME_FIFA) {
      throw new TestError(
        "class SportsVideoGamingApp, appName should equal with \"FIFA\"");
    }

    // verify correct initialization of parent genre
    if (sportsVideoGamingApp.getGenre() !== VideoGamingApp.VIDEO_GAME_GENRE_SPORTS) {
      throw new TestError(
        "class SportsVideoGamingApp, should initialize parent using VideoGamingApp.VIDEO_GAME_GENRE_SPORTS");
    }
  }

  testFifaApp() {
    const fifaApp = new FifaApp();

    // verify inheritance
    if (! Object.getPrototypeOf(FifaApp).name === "SportsVideoGamingApp") {
      throw new TestError(
        "class FifaApp should extend class SportsVideoGamingApp");
    }

    // verify correct initialization of parent appName
    if (fifaApp.getAppName() !== APP_NAME_FIFA) {
      throw new TestError(
        "class FifaApp, should initialize parent using APP_NAME_FIFA");
    }
  }

  testNbaApp() {
    const nbaApp = new NbaApp();

    // verify inheritance
    if (! Object.getPrototypeOf(NbaApp).name === "SportsVideoGamingApp") {
      throw new TestError(
        "class NbaApp should extend class SportsVideoGamingApp");
    }

    // verify correct initialization of parent appName
    if (nbaApp.getAppName() !== APP_NAME_NBA) {
      throw new TestError(
        "class NbaApp, should initialize parent using APP_NAME_NBA");
    }
  }

}
