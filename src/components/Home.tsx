import "../styles/home.scss";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { gsap } from "gsap";

function Home() {
  /* const { ref, inView, entry } = useInView({
    
    threshold: 0.9,
    initialInView: true,
    triggerOnce: true
  });


  useEffect(() => {

    let gsapTimeline = gsap.timeline();

    gsapTimeline.fromTo('.gradient', {backgroundColor: "rgba(0 0 0 / 0)"}, {backgroundColor: "rgba(0 0 0 / .7)", duration: "1.5"});
    gsapTimeline.fromTo('.home-title', {top: "-100", opacity:"0"}, {top: "0", opacity:"1", duration: "1"}, "<");
    gsapTimeline.fromTo('.home-content', {bottom: "-100", opacity:"0"}, {bottom: "0", opacity:"1", duration: "1"}, "<+=0.5");
  }, [inView]);*/

  return (
    <section id="home" className="home">
      <div className="gradient"></div>
      <div className="home-wrapper">
        <h1 className="home-title">
          The<span className="highlight"> best </span>restaurant in New York!
        </h1>
        <div className="home-content">
          <p className="home-content-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
            dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora, neque!
          </p>
        </div>

        <div className="home-button">
          <p>Check our menu!</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
