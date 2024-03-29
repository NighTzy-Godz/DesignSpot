import "../../../assets/css/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {" "}
      <div className="container">
        <ul>
          <li>
            <a href="https://www.instagram.com">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>

          <li>
            <a href="https://www.tiktok.com">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </li>
        </ul>
        <p>Design Spot &copy; 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
