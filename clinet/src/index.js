import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { AboutMePage, PortfolioPage, ResumePage, ContactPage } from './App';

const navbarEl = document.querySelector('#navroot')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AboutMePage />
);

function handleNavbarClick(event) {
  event.preventDefault();

  const location = event.target

  console.log(location.text)

  switch (location.text) {
    case 'About Me':
      root.render(
        <AboutMePage />
      );
      break;
    case 'Portfolio':
      root.render(
        <PortfolioPage />
      );
      break;
    case 'Resume':
      root.render(
        <ResumePage />
      );
      break;
    case 'Contact':
      root.render(
        <ContactPage />
      );
      break;
    default:
      root.render(
        <AboutMePage />
      );
  }
}

navbarEl.addEventListener('click', handleNavbarClick)