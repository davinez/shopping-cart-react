import React from 'react';

export const Footer = () => {
  return (
    <footer className="page-footer">
      <a
        href="https://github.com/davinez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="github-image"
          src={process.env.PUBLIC_URL + '/images/github.svg'}
          alt="github icon"
        />
      </a>
    </footer>
  );
};
