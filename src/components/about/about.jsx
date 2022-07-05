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
          <p>
          Innovative and technically-astute software developer well-versed in analyzing user needs and developing software to precisely meet diverse needs. Demonstrates mastery of multiple programming languages and proactively keeps up with industry trends. Driven to wear many programming hats with expertise in creating everything from new applications to new operating systems.
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
