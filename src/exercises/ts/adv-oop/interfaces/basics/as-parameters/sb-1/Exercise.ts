
interface Audible {
  // add a method named 'getAudio()' with return-type 'string'
}

class Song implements Audible {
  // add a constructor with a private property parameter named 'lyrics'

  // implement the interface method, so that it return member property 'lyrics'
}

class Podcast implements Audible {
  // add a constructor with a private property parameter named 'text'

  // implement the interface method, so that it return member property 'text'
}

class Announcement implements Audible {
  // add a constructor with a private property parameter named 'announcement'

  // implement the interface method, so that it return member property 'announcement'
}

class Spotify {
  private static readonly COMMERCIAL_INTERVAL = 6;
  private playlistAudibles: Audible[] = [];

  constructor(private announcementAudibles: Audible[]) {}

  // declare a public method named 'addToPlaylist()', with a parameter
  // named 'audible' of type 'Audible'
  // the method adds 'audible' to the array 'playlistAudibles'

  // declare a public method named 'playNext()', with no parameters,
  // and a return-type string.
  // every time this method is called, it should play the next Audible in
  // the playlist. for every 6 audibles, the method will play an
  // announcement instead

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

// add a new 'Announcement' to the 'announcements' array,
// using ANNOUNCEMENT_COCA_COLA

// add a new 'Announcement' to the 'announcements' array,
// using ANNOUNCEMENT_DOMINOS

const spotify: Spotify = new Spotify(announcements);

// add a new song to the playlist, using SONG_1
// add a new song to the playlist, using SONG_2
// add a new song to the playlist, using SONG_3
// add a new song to the playlist, using SONG_4
// add a new podcast to the playlist, using PODCAST_1
// add a new podcast to the playlist, using PODCAST_2
// add a new podcast to the playlist, using PODCAST_3


/* do not change anything below this line */
export {
  ANNOUNCEMENT_COCA_COLA, ANNOUNCEMENT_DOMINOS, Announcement, PODCAST_1, PODCAST_2, PODCAST_3, Podcast, SONG_1, SONG_2, SONG_3, SONG_4, Song, spotify
};

