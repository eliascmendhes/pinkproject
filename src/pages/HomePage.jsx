import React from 'react';

    const HomePage = () => {
      return (
        <div>
          <div className="category">
            <h2>Diário</h2>
            <div className="entry-block">
              <p>Site em desenvolvimento. </p>
            </div>
          </div>
          <div className="category">
            <h2>Filmes</h2>
            <div className="entry-block">
            <p>9ª MOSTRA DE CINEMA CHINÊS: LONGE, MAS PERTO</p>
            <a href="https://www.spcineplay.com.br/pages/2" target="_blank" rel="noopener noreferrer">link</a>
            </div>
          </div>
          <div className="category">
            <h2>Música</h2>
            <div className="entry-block">
              <p>rádio on ou off</p>
            </div>
          </div>
          
        </div>
      );
    };

    export default HomePage;
