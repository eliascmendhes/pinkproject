import React from 'react';
    import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
    import DiaryPage from './pages/DiaryPage';
    import MoviesPage from './pages/MoviesPage';
    import MusicPage from './pages/MusicPage';
    import HomePage from './pages/HomePage';
    import './index.css';

    const App = () => {
      return (
        <Router>
          <div className="container">
            <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/diary">Diário</Link>
              <Link to="/movies">Filmes</Link>
              <Link to="/music">Música</Link>
            </div>
            <div className="marquee">
              <span>We are online! 🌸🎀</span>
            </div>
            {/* <div className="gif-container">
            
            </div> */}
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
