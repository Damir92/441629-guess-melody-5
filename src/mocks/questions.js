const AVATAR_URL = `https://www.fillmurray.com/128/128`;
const SONG_URL = `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `${SONG_URL}`,
        genre: `rock`,
      },
      {
        src: `${SONG_URL}`,
        genre: `blues`,
      },
      {
        src: `${SONG_URL}`,
        genre: `jazz`,
      },
      {
        src: `${SONG_URL}`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `${SONG_URL}`,
    },
    answers: [
      {
        picture: `${AVATAR_URL}`,
        artist: `John Snow`,
      },
      {
        picture: `${AVATAR_URL}`,
        artist: `Jack Daniels`,
      },
      {
        picture: `${AVATAR_URL}`,
        artist: `Jim Beam`,
      },
    ],
  },
];
