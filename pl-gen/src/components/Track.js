export default function Track(props) {
  return (
    <li className='song'>
      <span className='position'>{props.position}.</span>
      <span className='title'>
        <span>{props.song.songName}</span>
        <span className='movie'>{props.song.movieTitle}</span>
      </span>
      <spna className='duration'>{props.song.duration}</spna>
    </li>
  );
}
