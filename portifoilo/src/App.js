import React from 'react';
import './App.css';

const Header = () => (
  <header>
    <h1>Ibrahim Elgohary</h1>
    <p>Electronics and Communication Engineer | Cybersecurity Specialist</p>
  </header>
);

const About = () => (
  <section id="about">
    <h2>About Me</h2>
    <p>
      A motivated Electronics and Communication Engineering graduate with a strong emphasis on cybersecurity and penetration testing.
    </p>
  </section>
);

const App = () => {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
};

export default App;
