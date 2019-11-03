import React, { Component } from 'react';
import './About.css';
import EducationImg from './education.png';
import ExperienceImg from './experience.png';
import SkillsImg from './skills.png';
import Carat from './carat.png'


class About extends Component {
    render() {

        return (
          <>
            <div className="about-page">
              <div className="info-wrapper">
                <img src={EducationImg} className="header-img"></img>
              </div>
              <div>
                <img src={Carat} width="30px"></img>Here's a thing I did.
                <br></br>
                <img src={Carat} width="30px"></img>And another thing.
              </div>
              <div className="info-wrapper">
                <img src={ExperienceImg} className="header-img"></img>
              </div>
              <div>
                Here's a thing I did.
                <br></br>
                And another thing.
              </div>
              <div className="info-wrapper">
                <img src={SkillsImg} className="header-img"></img>
              </div>
              <div className="skills-list">
                <div className="skills-column">
                  <img src={Carat} width="30px"></img>JavaScript
                  <br></br>
                  <img src={Carat} width="30px"></img>React JS
                  <br></br>
                  <img src={Carat} width="30px"></img>Node.js
                  <br></br>
                  <img src={Carat} width="30px"></img>Redux
                </div>
                <div className="skills-column">
                  <img src={Carat} width="30px"></img>Ruby
                  <br></br>
                  <img src={Carat} width="30px"></img>CSS
                  <br></br>
                  <img src={Carat} width="30px"></img>HTML5
                  <br></br>
                  <img src={Carat} width="30px"></img>Material UI
                  <br></br>
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default About;