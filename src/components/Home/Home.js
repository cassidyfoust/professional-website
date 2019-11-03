import React, { Component } from 'react';
import './Home.css'
import Text from './im_cass.png';
import ProfPic from './cass.png'


class Home extends Component {
    render() {

        return (
            <>
                <div className="home-page">
                    <img src={ProfPic} className="prof-pic"></img>
                    <div>
                        <img src={Text} className="text-img"></img>
                        <div className="home-text">
                            I'm a former publishing professional turned full stack software developer.
                            With a background in marketing and graphic design, my passion is merging
                            elegant code with elegant design. I believe even the smartest code
                            is useless if users don't want to interact with it. I graduated from
                            Macalester College in 2015 with a B.A. in Creative Writing and Prime Digital Academy
                            in 2019 with a certificate in Full Stack Software Engineering.
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Home;