export default function Track(props) {
  return (
    <li className='song' onClick={() => props.onTrackClick(props.position - 1)}>
      <span className='position'>{props.position}.</span>
      <span className='title'>
        <span>{props.song.songName}</span>
        <span className='movie'>{props.song.movieTitle}</span>
      </span>
      <span className='duration'>{props.song.duration}</span>
    </li>
  );
}
