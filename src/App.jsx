



import React, { useState, createContext, useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profilePic from './assets/profile.jpg'; // Replace with your own photo

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}


function ProgressBar({ label, percent }) {
  return (
    <div className="cl-progress-bar">
      <span className="cl-progress-label">{label}</span>
      <div className="cl-progress-track">
        <div className="cl-progress-fill" style={{ width: percent + '%' }}></div>
      </div>
      <span className="cl-progress-percent">{percent}%</span>
    </div>
  );
}

function Timeline() {
  // Example timeline data
  const items = [
    {
      year: '2024',
      title: 'UI/UX Designer',
      org: 'Academic Affairs, CU',
      desc: 'Led dashboard redesign, improved satisfaction by 35%.'
    },
    {
      year: '2023',
      title: 'Campus Ambassador',
      org: 'Axeroftop, IIT Bombay',
      desc: 'Organized outreach, awarded Best Campus Ambassador.'
    }
  ];
  return (
    <div className="cl-timeline">
      {items.map((item, i) => (
        <div className="cl-timeline-item" key={i}>
          <div className="cl-timeline-dot"></div>
          <div className="cl-timeline-content">
            <span className="cl-timeline-date">{item.year}</span>
            <b>{item.title}</b> <span className="cl-timeline-org">@ {item.org}</span>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}


function App() {
  return (
    <ThemeProvider>
      <div className="cl-root">
        {/* Modern oval navbar */}
  <nav className="cl-nav">
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ThemeToggle />
        </nav>
        {/* Animated name hero with blur/tech background */}
        <section className="cl-hero">
          <div className="cl-hero-bg"></div>
          <h1 className="cl-hero-title">NISHTHA<br/>KATARIA</h1>
          <div className="cl-hero-links">
            <a href="/cv.pdf" download>Download CV</a>
          </div>
        </section>
        <main className="cl-main">
          {/* About with photo and "Who am I?" */}
          <section className="cl-about" id="about">
            <div style={{display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center'}}>
              <img src={profilePic} alt="Profile" className="cl-profile-pic" style={{width: '160px', height: '160px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 32px 0 #f357a844'}} />
              <div style={{maxWidth: '420px', textAlign: 'left'}}>
                <h3 style={{marginBottom: '0.7em'}}>Who am I?</h3>
                <p>
                  Hi! I’m Nishtha, a passionate UI/UX designer and CSE student who loves blending technology and creativity. I design and build digital products that are beautiful, functional, and user-focused. I enjoy working with modern web technologies and design tools to create seamless experiences.
                </p>
              </div>
            </div>
          </section>
          {/* Project carousel */}
          <section className="cl-projects" id="projects">
            <h3>Projects</h3>
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} arrows>
              {[
                {
                  title: 'Music Web App',
                  desc: 'A platform connecting musicians and producers, with OpenAI-powered chat and secure sharing. Features: Real-time collaboration, AI-powered suggestions, and secure file sharing.',
                  stack: 'MERN, Firebase, Figma, OpenAI API',
                  imgClass: 'cl-img-1',
                  link: '#'
                },
                {
                  title: 'SHRE SURAKSHA',
                  desc: 'Women safety alert web solution with emergency features, reporting, and location tracking. Features: SOS alerts, live location, and community support.',
                  stack: 'ReactJS, Tailwind, Figma',
                  imgClass: 'cl-img-2',
                  link: '#'
                },
                {
                  title: 'Health Sync',
                  desc: 'Centralized health platform with role-based dashboard and real-time updates. Features: Health records, notifications, and analytics.',
                  stack: 'ReactJS, Firebase',
                  imgClass: 'cl-img-3',
                  link: '#'
                }
              ].map((project, i) => (
                <div className="cl-project-card" key={i}>
                  <div className={`cl-project-img ${project.imgClass}`}></div>
                  <div className="cl-project-info">
                    <h4>{project.title}</h4>
                    <p>{project.desc}</p>
                    <span className="carousel-stack">{project.stack}</span>
                    <a href={project.link} className="carousel-link">View Project</a>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
          {/* Timeline */}
          <section className="cl-experience" id="experience">
            <h3>Experience Timeline</h3>
            <Timeline />
          </section>
          {/* Progress bars for languages */}
          <section className="cl-stack" id="stack">
            <h3>Tech Stack</h3>
            <div className="cl-stack-list">
              <span>React</span>
              <span>Node.js</span>
              <span>Figma</span>
              <span>Firebase</span>
              <span>Tailwind</span>
              <span>Photoshop</span>
              <span>C++</span>
            </div>
          </section>
          {/* Achievements */}
          <section className="cl-achievements" id="achievements">
            <h3>Achievements</h3>
            <ul className="cl-achievements-list">
              <li>Best Campus Ambassador – Axeroftop, IIT Bombay (2024)</li>
              <li>Top 10 – Hack With Chandigarh (2024)</li>
              <li>Web Development Certificate – ECELL IIT Hyderabad</li>
              <li>Scholarship – Lenskills Learning</li>
            </ul>
          </section>
          {/* Contact & Socials */}
          <section className="cl-contact" id="contact">
            <h3>Let’s Connect</h3>
            <form className="cl-contact-form" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Message" required></textarea>
              <button type="submit">Send</button>
            </form>
            <div className="cl-socials">
              <a href="https://linkedin.com/in/nishthakataria1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:nishthakataria2003@gmail.com">Email</a>
              <a href="#">GitHub</a>
            </div>
          </section>
        </main>
        {/* Designer footer */}
        <footer className="cl-footer">
          <span>Let’s connect — © 2025 Nishtha Kataria</span>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
