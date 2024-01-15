import TestError from "../../../../../../../infra/test/TestError";
import { FifaApp } from "./Exercise";

export class Tester {

  run() {
    this.test1();
    this.test2();
  }

  test1() {
    const fifaApp = new FifaApp();

    if (! fifaApp.getAppName) {
      throw new TestError("Missing implementation: getAppName()");
    }
    if (! fifaApp.getGameType) {
      throw new TestError("Missing implementation: getGameType()");
    }
    if (! fifaApp.getGenre) {
      throw new TestError("Missing implementation: getGenre()");
    }

    if (fifaApp.getAppName() !== "FIFA") {
      throw new TestError("getAppName() doesn't return the app name");
    }
    if (fifaApp.getGameType() !== "Video") {
      throw new TestError("getGameType() doesn't return 'Video'");
    }
    if (fifaApp.getGenre() !== "Sports") {
      throw new TestError("getGenre() doesn't return 'Video'");
    }
  }

  test2() {
    const nbaApp = new NbaApp();

    if (! nbaApp.getAppName) {
      throw new TestError("Missing implementation: getAppName()");
    }
    if (! nbaApp.getGameType) {
      throw new TestError("Missing implementation: getGameType()");
    }
    if (! nbaApp.getGenre) {
      throw new TestError("Missing implementation: getGenre()");
    }

    if (nbaApp.getAppName() !== "NBA") {
      throw new TestError("getAppName() doesn't return the app name");
    }
    if (nbaApp.getGameType() !== "Video") {
      throw new TestError("getGameType() doesn't return 'Video'");
    }
    if (nbaApp.getGenre() !== "Sports") {
      throw new TestError("getGenre() doesn't return 'Video'");
    }
  }

}
