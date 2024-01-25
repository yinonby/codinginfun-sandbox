
import TestError from "../../../../../../../infra/test/TestError";
import {
  ANNOUNCEMENT_COCA_COLA, ANNOUNCEMENT_DOMINOS,
  Announcement,
  PODCAST_1, PODCAST_2, PODCAST_3,
  Podcast,
  SONG_1, SONG_2, SONG_3, SONG_4,
  Song, spotify
} from "./Exercise";

export class Tester {
  testSpotifyNextCnt = 1;

  run() {
    this.testSong();
    this.testPodcast();
    this.testAnnouncement();
    this.testSpotify();
  }

  testSong() {
    const lyrics = "La la la";
    const song = new Song(lyrics);
    if (song.getAudio() !== lyrics) {
      throw new TestError("Incorrect song lyrics, expected: " + lyrics);
    }
  }

  testPodcast() {
    const text = "This is a podcast";
    const podcast = new Podcast(text);
    if (podcast.getAudio() !== text) {
      throw new TestError("Incorrect podcast text, expected: " + text);
    }
  }

  testAnnouncement() {
    const announcement = "Coca cola";
    const podcast = new Announcement(announcement);
    if (podcast.getAudio() !== announcement) {
      throw new TestError("Incorrect announcement, expected: " + announcement);
    }
  }

  testSpotify() {
    this.testSpotifyNext(ANNOUNCEMENT_COCA_COLA);
    this.testSpotifyNext(SONG_1);
    this.testSpotifyNext(SONG_2);
    this.testSpotifyNext(SONG_3);
    this.testSpotifyNext(SONG_4);
    this.testSpotifyNext(PODCAST_1);
    this.testSpotifyNext(PODCAST_2);
    this.testSpotifyNext(ANNOUNCEMENT_DOMINOS);
    this.testSpotifyNext(PODCAST_3);
  }

  testSpotifyNext(expectedAudio) {
    if (expectedAudio !== spotify.playNext()) {
      throw new TestError("Incorrect audio #" + this.testSpotifyNextCnt +
        ", expected: " + expectedAudio);
    }
    this.testSpotifyNextCnt++;
  }

}
