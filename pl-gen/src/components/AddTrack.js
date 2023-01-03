import { useState } from 'react';

const formatter = new Intl.NumberFormat('en-us', { minimumIntegerDigits: 2 });

export default function AddTrack(props) {
  const [form, setForm] = useState({
    songName: '',
    movieTitle: '',
    duration: '',
  });

  const handleOnInputChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = () => {
    const minutes = Math.floor(Number(form.duration / 60));
    const seconds = Number(form.duration) % 60;

    const newSong = {
      songName: form.songName,
      movieTitle: form.movieTitle,
      duration: `${minutes}:${formatter.format(seconds)}`,
    };
    props.addSong(newSong);

    setForm({
      songName: '',
      movieTitle: '',
      duration: '',
    });
  };

  return (
    <div className='add-track-form'>
      <h2>Add New Track</h2>

      <div className='form-input'>
        <label htmlFor='songName'>Song Name</label>
        <input
          name='songName'
          type='text'
          placeholder='song name'
          value={form.songName}
          onChange={handleOnInputChange}
        />
      </div>

      <div className='form-input'>
        <label htmlFor='movieTitle'>Movie Title</label>
        <input
          name='movieTitle'
          type='text'
          placeholder='movie title'
          value={form.movieTitle}
          onChange={handleOnInputChange}
        />
      </div>

      <div className='form-input'>
        <label htmlFor='duration'>Duration in Seconds</label>
        <input
          name='duration'
          type='number'
          value={form.duration}
          onChange={handleOnInputChange}
        />
      </div>

      <button className='btn submit' onClick={handleOnSubmit}>
        Save
      </button>
    </div>
  );
}
