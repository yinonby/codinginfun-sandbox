
interface Audible {
  getAudio(): string;
}

class Song implements Audible {
  constructor(private lyrics: string) {}

  public getAudio(): string {
    return this.lyrics;
  }
}

class Podcast implements Audible {
  constructor(private text: string) {}

  public getAudio(): string {
    return this.text;
  }
}

class Announcement implements Audible {
  constructor(private announcement: string) {}

  public getAudio(): string {
    return this.announcement;
  }
}

class Spotify {
  private static readonly COMMERCIAL_INTERVAL = 6;
  private playlistAudibles: Audible[] = [];
  private nextPlaylistAudibleIdx = 0;
  private nextAnnouncementAudibleIdx = 0;
  private playedPlaylistAudibleCnt: number = 0;

  constructor(private announcementAudibles: Audible[]) {}

  // API methods

  public addToPlaylist(audible: Audible) {
    this.playlistAudibles.push(audible);
  }

  public playNext(): string {
    let audio: string = "";

    if (this.shouldPlayAnnouncement()) {
      audio = this.playNextAnnouncementAudio();
    } else {
      audio = this.playNextFromPlaylist();
    }

    return audio;
  }

  // internal methods

  private shouldPlayAnnouncement(): boolean {
    return this.announcementAudibles.length > 0 &&
      (this.playedPlaylistAudibleCnt % (Spotify.COMMERCIAL_INTERVAL + 1) === 0);
  }

  private playNextAnnouncementAudio(): string {
    if (this.nextAnnouncementAudibleIdx >= this.announcementAudibles.length) {
      this.nextAnnouncementAudibleIdx = 0;
    }
    const announcementAudibleIdx: number = this.nextAnnouncementAudibleIdx;
    this.nextAnnouncementAudibleIdx++;
    this.playedPlaylistAudibleCnt++;
    return this.announcementAudibles[announcementAudibleIdx].getAudio();
  }

  private playNextFromPlaylist(): string {
    if (this.playlistAudibles.length === 0) {
      return "";
    }
    if (this.nextPlaylistAudibleIdx >= this.playlistAudibles.length) {
      this.nextPlaylistAudibleIdx = 0;
    }
    const playlistAudibleIdx: number = this.nextPlaylistAudibleIdx;
    this.nextPlaylistAudibleIdx++;
    this.playedPlaylistAudibleCnt++;
    return this.playlistAudibles[playlistAudibleIdx].getAudio();
  }

}

const ANNOUNCEMENT_COCA_COLA = "Coca Cola";
const ANNOUNCEMENT_DOMINOS = "Domino's Pizza";
const SONG_1 = "LA LA LA";
const SONG_2 = "LU LU LU";
const SONG_3 = "LI LI LI";
const SONG_4 = "LE LE LE";
const PODCAST_1 = "Books for kids";
const PODCAST_2 = "Flowers for life";
const PODCAST_3 = "Running as hobbie";

const announcements: Announcement[] = [];
announcements.push(new Announcement(ANNOUNCEMENT_COCA_COLA));
announcements.push(new Announcement(ANNOUNCEMENT_DOMINOS));

const spotify: Spotify = new Spotify(announcements);
spotify.addToPlaylist(new Song(SONG_1))
spotify.addToPlaylist(new Song(SONG_2))
spotify.addToPlaylist(new Song(SONG_3))
spotify.addToPlaylist(new Song(SONG_4))
spotify.addToPlaylist(new Podcast(PODCAST_1))
spotify.addToPlaylist(new Podcast(PODCAST_2))
spotify.addToPlaylist(new Podcast(PODCAST_3))


/* do not change anything below this line */
export { ANNOUNCEMENT_COCA_COLA, ANNOUNCEMENT_DOMINOS, Announcement, PODCAST_1, PODCAST_2, PODCAST_3, Podcast, SONG_1, SONG_2, SONG_3, SONG_4, Song, spotify };

