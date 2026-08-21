import "./About.css";

const aboutImage = `${import.meta.env.BASE_URL}me.jpg`;

function About() {
  return (
    <section className="about">
      <div className="about-container">

        <div className="about-image">
          <img
            src={aboutImage}
            alt="Hardy Chang"
            className="about-photo"
          />
        </div>

        <div className="about-content">
          <h1 className="about-title">About Me</h1>

          <p className="about-text">
            Hello, I'm Hardy Chang. I graduated from San Francisco State University with a degree in Computer Science.
          </p>

          <p className="about-text">
            I enjoy building modern, responsive, and user-friendly web applications with React.
          </p>

          <p className="about-text">
            I'm constantly learning new technologies and improving my programming skills through personal projects.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;
