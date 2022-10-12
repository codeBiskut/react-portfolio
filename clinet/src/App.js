import './styles/App.css';
import { AboutMe } from './components/about-me';
import { Portfolio } from './components/portfolio';
import { Contact } from './components/contact';
import { Resume } from './components/resume';

export function AboutMePage() {
  return <AboutMe />;
}

export function PortfolioPage() {
  return <Portfolio />;
}

export function ContactPage(){
  return <Contact />;
}

export function ResumePage(){
  return <Resume />
}