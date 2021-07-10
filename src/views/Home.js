import React from 'react';

const Home = () => {
  return (
    <main className="home-container">
      <div className="home-image-container">
        <img
          className="home-image"
          src={process.env.PUBLIC_URL + '/images/space.jpg'}
          alt="A world space view"
        />
      </div>
      <div className="home-content-container">
        <p className="home-content-1">Top Quality</p>
        <p className="home-content-2">Top Technology</p>
        <p className="home-content-center">We are DavoWorld</p>
        <p className="home-content-3">Top Service</p>
        <p className="home-content-4">Top Security</p>
      </div>
    </main>
  );
};

export default Home;
