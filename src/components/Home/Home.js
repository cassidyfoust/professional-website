import React, { Component } from 'react';
import './Home.css'
import Text from './im_cass.png';
import ProfPic from './cass.png';
import SkillsImg from './skills.png';
import Carat from './carat.png'


class Home extends Component {
    render() {

        return (
          <>
            <div className="home-page">
              <img src={ProfPic} className="prof-pic"></img>
              <div>
                <div className="text-img-wrapper">
                  <img src={Text} className="text-img"></img>
                </div>
                <div className="home-text">
                  I'm a former publishing professional turned front end web developer.
                  With a background in marketing and graphic
                  design, my passion is merging elegant code with elegant
                  design. I graduated from Macalester
                  College in 2015 with a B.A. in Creative Writing and Prime
                  Digital Academy in 2019 with a certificate in Full Stack
                  Software Engineering. I'm available for freelance web development
                  and design.
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
                    <img src={Carat} width="30px"></img>PHP (Symfony 4)
                  </div>
                  <div className="skills-column">
                    <img src={Carat} width="30px"></img>Adobe Photoshop
                    <br></br>
                    <img src={Carat} width="30px"></img>Adobe InDesign
                    <br></br>
                    <img src={Carat} width="30px"></img>Redux
                    <br></br>
                    <img src={Carat} width="30px"></img>AngularJS
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
            </div>
          </>
        );
    }
}

export default Home;