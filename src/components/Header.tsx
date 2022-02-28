import "../styles/header.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

function Header() {
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
        setVisible(
          prevScrollPos > currentScrollPos ||
            false
        );
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
    <header style={{ top: visible ? "0px" : "-72px" }}>
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
              handleNavClick("menu");
            }}
          >
            Menu
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
              handleNavClick("contact");
            }}
          >
            Contact
          </li>
        </ul>
      </nav>

     {/* <svg
        
        viewBox="0 0 255 670"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame 1">
          <line
            id="Line 2"
            x1="117.471"
            y1="122.007"
            x2="115.5"
            y2="530.007"
            stroke="#919191"
            stroke-width="3"
          />
          <circle id="Ellipse 1" cx="116" cy="96" r="30" fill="#C4C4C4" />
          <circle id="Ellipse 2" cx="116" cy="250" r="30" fill="#C4C4C4" />
          <circle id="Ellipse 3" cx="116" cy="560" r="30" fill="#C4C4C4" />
          <circle id="Ellipse 4" cx="116" cy="405" r="30" fill="#C4C4C4" />
        </g>
     </svg>*/}
    </header>
  );
}

export default Header;
