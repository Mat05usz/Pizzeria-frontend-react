import SocialMediaLinks from "../social_media_links/SocialMediaLinks";


export default function ContactContent(){

    return(
        <div className="contact-content">
          <p className="contact-content-telephone">
            <span className="highlight">Telephone: </span>+48 123 456 789
          </p>
          <p className="contact-content-email">
            <span className="highlight">E-mail: </span> pizza@pizza.com
          </p>
          <p className="contact-content-media">
            or find us on <span className="highlight">social media</span>
          </p>
          <SocialMediaLinks />
        </div>
    )
}