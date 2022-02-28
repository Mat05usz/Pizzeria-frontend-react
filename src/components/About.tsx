import "../styles/about.scss";
import SectionTitle from "./SectionTitle";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

interface GalleryImages {
  original: string;
  thumbnail: string;
  originalHeight: number;
}

function About() {

  const originalImageHeight = 1900;

  const galleryImages: GalleryImages[] = [
    {
      original: "/images/restaurant01.png",
      thumbnail: "/images/restaurant01.png",
      originalHeight: originalImageHeight,
    },
    {
      original: "/images/restaurant02.png",
      thumbnail: "/images/restaurant02.png",
      originalHeight: originalImageHeight,
    },
    {
      original: "/images/restaurant03.png",
      thumbnail: "/images/restaurant03.png",
      originalHeight: originalImageHeight,
    },
  ];

  return (
    <>
      <SectionTitle text="About" />
      <section id="about" className="about">
        <div className="about-content-wrapper flex">
          <div className="about-images">
            <img className="about-image" src={"/images/farm.png"} alt="farm" />
            <img className="about-image" src={"/images/farm02.png"} alt="farm" />
            <img className="about-image" src={"/images/farm03.png"} alt="farm" />
            <img className="about-image" src={"/images/farm04.png"} alt="farm" />
          </div>
          <div className="about-content flex">
            <div className="about-text">
              <h2>
                Only <span className="highlight">eco</span> produce!
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
                impedit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur, aspernatur temporibus? Assumenda excepturi
                facere quaerat rem placeat inventore atque tempora.
              </p>
              <h2>
                Bought from <span className="highlight">local</span> farms!
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam,
                impedit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Consectetur, aspernatur temporibus? Assumenda excepturi
                facere quaerat rem placeat inventore atque tempora. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Rem, totam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nisi amet
                dolores beatae fugit eligendi repudiandae autem non ipsum.
                Veniam, saepe.
              </p>
            </div>
          </div>
          <div className="about-gallery">
            <h2>
              Take a look <span className="highlight">inside</span>
            </h2>

            <ImageGallery
              items={galleryImages}
              showThumbnails={false}
              lazyLoad={true}
              showPlayButton={false}
              autoPlay={true}
              slideInterval={8000}
              slideDuration={1000}
            />
          </div>
        </div>
      </section>
    </>
  );
}

//<iframe  className="about-map" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0"></iframe>

export default About;
