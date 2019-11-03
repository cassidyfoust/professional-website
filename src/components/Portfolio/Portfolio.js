import React, { Component } from 'react';
import PortfolioText from './portfolio_text.png';
import './Portfolio.css'
import Carousel from '../Carousel/Carousel.js'


class Portfolio extends Component {
    render() {

        return (
          <>
            <div className="portfolio-page">
              <div>
                <img src={PortfolioText} className="portfolio-text"></img>
              </div>
              <div>
                <Carousel />
              </div>
              <div className="seeMore">
                Want to see more? Check out my{" "}
                <a
                  href="https://github.com/cassidyfoust/"
                  className="git-link"
                  target="_blank"
                >
                  GitHub.
                </a>
                <br></br>
                For design-specific projects, head over to my{" "}
                <a
                  href="https://www.behance.net/cassidyfou9940"
                  className="git-link"
                  target="_blank"
                >
                  Behance
                </a>
                .
              </div>
            </div>
          </>
        );
    }
}

export default Portfolio;