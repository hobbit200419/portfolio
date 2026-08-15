import "./Foot.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Hardy Chang. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;