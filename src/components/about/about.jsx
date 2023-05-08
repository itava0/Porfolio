import React from 'react';
import Heading from '../common/heading/heading';
import { skillsData } from '../../services/data';

const About = () => {
  return (
    <section name="about" className="section section--about">
      <Heading title="about me" number="01" section="about" />
      <div className="about-flex">
        <div className="about-group">
          <h2 className="about-group__title">Who am I?</h2>
          <p>
            As a Software Developer, I am passionate about creating full stack
            applications, and I am excited to share some of my work with you
            through this website.
          </p>
          <p>
            Throughout my career, I have had the opportunity to work on various
            projects and collaborate with clients from different industries.
            From designing engaging user interfaces to developing complex web
            applications, my goal is to create solutions that are not only
            functional but also aesthetically pleasing.
          </p>
          <p>
            In this web portfolio, you will find a collection of my most recent
            projects, showcasing my skills and expertise in web development.
            Please feel free to browse around and get in touch if you have any
            questions or if you would like to discuss a potential project. Thank
            you for visiting and I hope you enjoy my work!"
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
