import "./contact.scss";
import SectionTitle from "../section_title/SectionTitle";
import SocialMediaLinks from "../social_media_links/SocialMediaLinks";
import ContactContent from "../contact_content/ContactContent";

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <SectionTitle text="Contact" backgroundImg="images/contact-us.png" />
      <section id="contact" className="contact">
        <ContactContent />
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
