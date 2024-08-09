/* eslint-disable no-prototype-builtins */

import TestError from "../../../../../../../infra/test/TestError";
import {
  ComicCon, comicCon,
} from "./Exercise";

export class Tester {

  run() {
    this.testParticipants();
  }

  testParticipants() {
    if (! ComicCon.prototype.hasOwnProperty("getParticipants")) {
      throw new TestError(
        "ComicCon must implement getParticipants()");
    }
    const participants = comicCon.getParticipants();

    if (participants.length !== 4) {
      throw new TestError("Incorrect number of participants, expected 4");
    }

    this.testParticipant(participants[0], "Lisa", "Smith", "Spiderman");
    this.testParticipant(participants[1], "Bob", "Smith", "Superman");
    this.testParticipant(participants[2], "Monica", "Hunter", "Batman");
    this.testParticipant(participants[3], "Rob", "Hunter", "Superman");
  }

  testParticipant(participant, firstName, lastName, favoriteCharacter) {
    const expectedFullName = firstName + " " + lastName;
    if (participant.getFullName() !== expectedFullName) {
      throw new TestError("Incorrect full name, expected: " + expectedFullName);
    }

    if (participant.getFavoriteCharacter() !== favoriteCharacter) {
      throw new TestError("Incorrect book, expected: " + favoriteCharacter);
    }
  }
}
