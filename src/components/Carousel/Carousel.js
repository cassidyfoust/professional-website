import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carousel.css'
import FruitBasket from './fruit-basket.png';
import ToDo from './to-do-list.png';
import Groovies from './Groovies.png';
import Movies from './movie-sagas.png';

class PortfolioCarousel extends Component {

    render() {
        return (
            <>
                <Carousel className="carousel">
                    <Carousel.Item>
                        <a href="https://github.com/cassidyfoust/Groovies"
                            target="_blank">
                            <img
                                className="carouselImg"
                                src={Groovies}
                                alt="Groovies: Movies for Groups"
                            />
                        </a>
                    </Carousel.Item>
                        <Carousel.Item>
                        <a href="https://saga-fruit-basket.herokuapp.com"
                            target="_blank">
                            <img
                                className="carouselImg"
                                src={FruitBasket}
                                alt="Saga Fruit Basket"
                            onClick={(event) => this.props.history.push('https://saga-fruit-basket.herokuapp.com/')}
                            />
                            </a>
                        </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://github.com/cassidyfoust/movie-sagas"
                            target="_blank">
                            <img
                                className="carouselImg"
                                src={Movies}
                                alt="Redux Sagas Movie Project"
                            />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://porta-tier2-to-do.herokuapp.com/"
                            target="_blank">
                            <img
                                className="carouselImg"
                                src={ToDo}
                                alt="To Do Application"
                            />
                            </a>
                        </Carousel.Item>
                </Carousel>
            </>
        )
    }
}
export default PortfolioCarousel;