import React from "react";

function About() {
  return (
    <div className="about__container">
      <h1>About US</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere alias
        suscipit quam officiis unde eum excepturi illo impedit! Autem a
        laboriosam, eligendi tempore eos deserunt culpa nihil ducimus sequi
        nobis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        laborum perspiciatis voluptatibus corrupti quaerat beatae harum iure
        atque cumque suscipit incidunt magni, assumenda vel, praesentium
        repellendus, ipsum magnam minima nam?
      </p>
      <h6>
        " This product uses the TMDb API but is not endorsed or certified by
        TMDb "
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
          alt=""
          id="tb__logo"
        />
      </h6>
    </div>
  );
}

export default About;
