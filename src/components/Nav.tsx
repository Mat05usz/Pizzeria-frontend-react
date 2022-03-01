import "../styles/nav.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Nav() {
  let location = useLocation();
  let navigate = useNavigate();
  let primaryNavigation = useRef<any>(null);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  let scrollingAutomatically = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      //If the site is being scrolled by clicking on the nav, don't hide the navbar,
      //instead check every 50ms if the scrolling has finished and go back to
      //default behaviour, which is navbar appearing/disappearing on scroll

      if (scrollingAutomatically.current) {
        const checkIfStoppedScrolling = setInterval(() => {
          if (window.scrollY === currentScrollPos) {
            scrollingAutomatically.current = false;
          }
          clearInterval(checkIfStoppedScrolling);
        }, 50);
      } else {
        setVisible(prevScrollPos > currentScrollPos || false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navToggleOnClick = () => {
    const visibility = primaryNavigation.current.getAttribute("data-visible");

    const navToggle = document.querySelector(".mobile-nav-toggle");

    if (visibility === "false") {
      primaryNavigation.current.setAttribute("data-visible", true);
      if (navToggle != null) navToggle.setAttribute("aria-expanded", "true");
    } else {
      primaryNavigation.current.setAttribute("data-visible", false);
      if (navToggle != null) navToggle.setAttribute("aria-expanded", "false");
    }
  };

  const handleNavClick = (navID) => {
    //If navbar is being used to navigate through the root of the site,
    //just scroll to whatever div was selected, otherwise if navbar is used outside of the
    //root, use react-router to navigate there, and scroll will be handled there.

    if (location.pathname === "/") {
      const sectionID = document.getElementById(navID);

      if (sectionID != null) {
        scrollingAutomatically.current = true;
        window.scrollBy(0, sectionID.getBoundingClientRect().top);
      }
    } else {
      navigate("/", { state: { navID: navID } });
    }
  };

  return (
    <div style={{ top: visible ? "0px" : "-72px" }} className="nav-wrapper">
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={navToggleOnClick}
      ></button>

      <nav>
        <ul
          ref={primaryNavigation}
          data-visible="false"
          id="primary-navigation"
          className="primary-navigation"
        >
          <li
            onClick={() => {
              handleNavClick("home");
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              handleNavClick("about");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              handleNavClick("menu");
            }}
          >
            Menu
          </li>
          <li
            onClick={() => {
              handleNavClick("contact");
            }}
          >
            Contact
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
