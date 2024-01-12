import TestError from "../../../../../../../infra/test/TestError";
import { VideoGamingApp } from "./Exercise";

export class Tester {

  run() {
    this.test1();
  }

  test1() {
    const videoGamingApp = new VideoGamingApp("FIFA");

    if (! videoGamingApp.getAppName) {
      throw new TestError("Missing implementation: getAppName()");
    }
    if (! videoGamingApp.getGameType) {
      throw new TestError("Missing implementation: getGameType()");
    }

    if (videoGamingApp.getAppName() !== "FIFA") {
      throw new TestError("getAppName() doesn't return the app name");
    }
    if (videoGamingApp.getGameType() !== "Video") {
      throw new TestError("getGameType() doesn't return 'Video'");
    }
  }

}
