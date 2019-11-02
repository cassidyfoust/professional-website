import React, { Component } from 'react';
import './Home.css'
import Text from './im_cass.png';
import ProfPic from './cass.png'


class Home extends Component {
    render() {

        return (
            <>
                <div className="about-page">
                    <img src={ProfPic} className="prof-pic"></img>
                    <div>
                        <img src={Text} className="text-img"></img>
                        <div className="about-text">
                            I'm a former publishing professional turned full stack software developer.
                            I have a background in marketing and graphic design. I graduated from
                            Macalester College in 2015 with a B.A. in Creative Writing.
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;