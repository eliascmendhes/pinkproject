import React from 'react';

    const MusicPage = () => {
      return (
        <div className="category">
          <h2>Recomendações</h2>
          <div className="entry-block">
            <h3>nome da musica</h3>
            <p>Artista</p>
            <p>Album</p>
            <img src="https://via.placeholder.com/150"  />
            <p> Link: <a href="https://example.com/lemon" target="_blank" rel="noopener noreferrer">Listen</a></p>
          </div>
          
        </div>
      );
    };

    export default MusicPage;
