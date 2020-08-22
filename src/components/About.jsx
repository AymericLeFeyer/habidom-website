import React from "react";

import '../style/About.css'; 

function About(props) {
  return (
    <div className={`about${props.scroll ? ' about-small' : ''}${!props.display ? ' display' : ''}`}>
      <p>Coucou</p>
    </div>
  );
}

export default About;
