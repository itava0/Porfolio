import React from "react";
import Heading from "../common/heading/heading";
import { skillsData } from "../../services/data";

const About = () => {
  return (
    <section name="about" className="section section--about">
      <Heading title="about me" number="01" section="about" />
      <div className="about-flex">
        <div className="about-group">
          <h2 className="about-group__title">Who am I?</h2>
          <p>I'm a full stack software developer based in Charlotte, NC.</p>
          <p>
            My passion is all about creating real elegant
            looking websites. I enjoy taking complex problems and turning them into simple and beautiful interface. Also, I love the logic and structure of coding and always strive to efficient and clean code.
          </p>
          <p>
           When I'm not coding, you'll find me in the court shooting some hoops. 
          </p>
        </div>
        <div className="about-group about-group--skills">
          <h2 className="about-group__title">Skill set</h2>
          <div className="skills-grid">
            {skillsData.map((e) => (
              <div key={e.id} className="skills-grid__item">
                {e.name.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
