import SocialMediaLinks from "../social_media_links/SocialMediaLinks";
import "./footer.scss";
import ContactContent from "../contact_content/ContactContent";

function Footer() {
  return (
    <footer className="footer">
      <p className="contact-content-telephone">
        <span className="highlight">Telephone: </span>+48 123 456 789
      </p>
      <p className="contact-content-email">
        <span className="highlight">E-mail: </span> pizza@pizza.com
      </p>
      <SocialMediaLinks />
    </footer>
  );
}

export default Footer;
