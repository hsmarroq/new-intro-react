import { useState } from 'react';
import Track from './Track';
import AddTrack from './AddTrack';

export default function Playlist(props) {
  const [status, setStatus] = useState('Paused...');
  const [currentSongIdx, setCurrentSongIdx] = useState(null);

  const handleOnPlayPauseClick = () => {
    if (status === 'Paused...') {
      setStatus('Playing...');
    } else if (status === 'Playing...') {
      setStatus('Paused...');
    }
  };

  const handleOnNextSongClick = () => {
    if (!currentSongIdx && currentSongIdx !== 0) {
      // currentSongIdx = 0 // dont do this
      setCurrentSongIdx(0);
    } else {
      let nextSongIdx = currentSongIdx + 1;
      if (nextSongIdx >= props.playlist.songs.length) {
        nextSongIdx = 0;
      }
      setCurrentSongIdx(nextSongIdx);
    }
    setStatus('Playing...');
  };

  const handleOnPrevSongClick = () => {
    if (!currentSongIdx && currentSongIdx !== 0) {
      // currentSongIdx = 0 // dont do this
      setCurrentSongIdx(0);
    } else {
      let nextSongIdx = currentSongIdx - 1;
      if (nextSongIdx < 0) {
        nextSongIdx = props.playlist.songs.length - 1;
      }
      setCurrentSongIdx(nextSongIdx);
    }
    setStatus('Playing...');
  };

  const handleTrackClick = (idx) => {
    setCurrentSongIdx(idx);
    setStatus('Playing...');
  };

  const activeTrack =
    Boolean(currentSongIdx) || currentSongIdx === 0
      ? props.playlist.songs[currentSongIdx]
      : null;

  return (
    <div className='playlist'>
      <div className='info'>
        <span className='status'>{status}</span>
        <p className='title'>{props.playlist.name}</p>
      </div>

      <div className='controls'>
        <div className='audio'>
          <audio preload='false' controls></audio>
        </div>

        <div className='buttons'>
          <button className='btn' onClick={handleOnPrevSongClick}>
            &larr;
          </button>
          <button className='button-play-pause'>
            <span
              className={status === 'Paused...' ? 'paused' : 'playing'}
              onClick={handleOnPlayPauseClick}
            ></span>
          </button>
          <button className='btn' onClick={handleOnNextSongClick}>
            &rarr;
          </button>
        </div>

        <div className='current-song'>
          <span>
            {activeTrack ? (
              <>
                {currentSongIdx + 1}. {activeTrack.songName}
              </>
            ) : null}
          </span>
        </div>
      </div>

      <ul className='tracks'>
        {props.playlist.songs.map((song, idx) => (
          <Track
            song={song}
            position={idx + 1}
            onTrackClick={handleTrackClick}
          />
        ))}
      </ul>

      <AddTrack addSong={props.addSong} />
    </div>
  );
}
