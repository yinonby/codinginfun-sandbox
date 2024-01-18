
//import TestError from "../../../../../../../infra/test/TestError";
import {
  comicCon,
} from "./Exercise";

export class Tester {

  run() {
    this.testParticipants();
  }

  testParticipants() {
    const participants = comicCon.getParticipants();

    this.testParticipant(participants[0], "Lisa", "Smith", "Spiderman");
    this.testParticipant(participants[1], "Bob", "Smith", "Superman");
    this.testParticipant(participants[2], "Monica", "Hunter", "Batman");
    this.testParticipant(participants[3], "Rob", "Hunter", "Superman");
  }

  testParticipant(participant, firstName, lastName, favoriteComicBook) {
    const expectedFullName = firstName + " " + lastName;
    if (participant.getFullName() !== expectedFullName) {
      throw TestError("Incorrect full name, expected: " + expectedFullName);
    }

    if (participant.getFavoriteComicBook() !== favoriteComicBook) {
      throw TestError("Incorrect book, expected: " + favoriteComicBook);
    }
  }
}
