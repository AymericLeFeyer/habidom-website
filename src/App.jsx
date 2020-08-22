// Components
import React, { useState, useRef, useEffect } from "react";

// Styles
import "./style/bootstrap.min.css";
import "./style/App.css";

// Libs
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";

// Components
import Appbar from "./components/Appbar";
import Services from "./components/Services";
import About from "./components/About";

import { BrowserRouter } from "react-router-dom";

function App() {
  // Check if page is scrolled
  const [hasScrolled, _setHasScrolled] = useState(false);
  const scrolledRef = useRef(hasScrolled);
  const [displayAbout, setDisplayAbout] = useState(false);

  const setHasScrolled = (data) => {
    scrolledRef.current = data;
    _setHasScrolled(data);
  };

  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);
    // eslint-disable-next-line
  }, []);

  var previous = 0;

  // Calculate the new margin top
  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 0,
      shrinkOff = 65;

    if (distanceY >= previous) {
      // Scroll down
      if (distanceY > shrinkOn) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    } else {
      // Scroll up
      if (distanceY > shrinkOff) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }

    previous = distanceY;
    // console.log(distanceY)
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Appbar scroll={scrolledRef.current} setDisplayAbout={() => setDisplayAbout(!displayAbout)} />
        <div
          className={`App-content${
            scrolledRef.current ? " App-content-small" : ""
          }`}
        >
          <About scroll={scrolledRef.current} display={displayAbout}/>

         
          <Services />
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
