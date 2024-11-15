import React, { useState, useEffect } from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import DiaryPage from './pages/DiaryPage';
    import MoviesPage from './pages/MoviesPage';
    import MusicPage from './pages/MusicPage';
    import HomePage from './pages/HomePage';
    import './index.css';

    const App = () => {
      const [audio] = useState(new Audio('https://streaming.radio.co/sefac315e7/listen'));
      const [playing, setPlaying] = useState(false);

      useEffect(() => {
        playing ? audio.play() : audio.pause();
      }, [playing, audio]);

      useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
          audio.removeEventListener('ended', () => setPlaying(false));
        };
      }, [audio]);

      const togglePlay = () => setPlaying(!playing);

      return (
        <Router>
          <div className="container">
            <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/diary">DIário</Link>
              <Link to="/movies">Filmes</Link>
              <Link to="/music">Música</Link>
            </div>
            <div className="marquee">
              <span>We are online! 🌸🎀</span>
            </div>
            {/* <div className="gif-container">
             
            </div> */}
            <button onClick={togglePlay}>{playing ? 'Pause Sound' : 'Play Sound'}</button>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/diary" element={<DiaryPage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/music" element={<MusicPage />} />
            </Routes>
            <div className="footer">
              <a href="https://letterboxd.com" target="_blank" rel="noopener noreferrer">Letterboxd</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </Router>
      );
    };

    export default App;
