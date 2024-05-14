
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/banner.jpg" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, I'm Muhammad Hamza.</h6>
            <h3>Web Developer</h3>
            <p>

I am a web developer proficient in JavaScript and React, with a strong passion for 
crafting dynamic and user-friendly web applications.
I have a keen eye for design and usability, ensuring that every project 
I undertake not only functions flawlessly but also delivers an exceptional user experience.
I enjoy using the latest tools and tricks to create websites that are interactive and easy to use. I pay attention to both the design and how easy it is for people to navigate through the site.




            </p>
            <a className="btn" href="#projects">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
