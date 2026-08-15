import { Link } from "react-router";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-intro">Hello, I'm</p>

          <h1 className="hero-title">Hardy Chang</h1>

          <h2 className="hero-role">Frontend Developer</h2>

          <p className="hero-description">
            I build clean, responsive, and user-friendly websites.
          </p>

          <div className="hero-buttons">
            <Link className="hero-button primary-button" to="/projects">
              View Projects
            </Link>

            <Link className="hero-button secondary-button" to="/contact">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            className="hero-image"
            src="/me.png"
            alt="Hardy Chang"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;