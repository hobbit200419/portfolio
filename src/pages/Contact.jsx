import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h1 className="contact-title">Contact Me</h1>

        <p className="contact-description">
          Thank you for visiting my portfolio.
          <br />
          If you'd like to discuss a project, internship,
          or collaboration opportunity, feel free to leave
          your contact information below.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Email</h3>
            <p>hobbitpeople0419@gmail.com</p>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <p>0905107725</p>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>台中市豐原區</p>
          </div>
        </div>

        <form className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;