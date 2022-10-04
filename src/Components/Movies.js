import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Movie from "./Movie";

class Movies extends Component {

    render() {
        return (
            <Carousel>

                        {this.props.movieData && this.props.movieData.map((movie, index) => (
                            <Carousel.Item>
                            <Movie
                                key = {index} 
                                movie = {movie}
                                />
                            </Carousel.Item>
                                
                            ))}
               
            </Carousel>
        );
    }
}
export default Movies;

