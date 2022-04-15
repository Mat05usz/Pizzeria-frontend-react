import "./contact.scss";
import SectionTitle from "../section_title/SectionTitle";

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <SectionTitle text="Contact" backgroundImg="images/contact-us.png" />
      <section id="contact" className="contact">
        <div className="contact-content">
          <p className="contact-content-telephone">
            <span className="highlight">Telephone: </span>+48 123 456 789
          </p>
          <p className="contact-content-email">
            <span className="highlight">E-mail: </span> pizza@pizza.com
          </p>

          <div className="social-media">
            <p>
              or find us on <span className="highlight">social media:</span>
            </p>
            <div className="social-media-links">
              <img
                src={"images/twitter_icon.png"}
                alt="Twitter social media link"
              />
              <img
                src={"images/facebook_icon.png"}
                alt="Facebook social media link"
              />
              <img
                src={"images/youtube_icon.png"}
                alt="Youtube social media link"
              />
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Second name" />
            <input type="email" placeholder="E-mail" />
            <input type="tel" placeholder="Telephone number" />
            <input type="text" placeholder="Number of people" />
            <input className="date" type="date" />
            <textarea
              className="additional-information"
              rows={4}
              placeholder="Additional information"
            ></textarea>
            <input className="submit-button" type="submit" value="Send" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
