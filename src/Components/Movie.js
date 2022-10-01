import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


class Movie extends Component {

    render() {
        return (
            <Carousel fade>       
            <Carousel.Item>
                    <img className='mx-auto' variant="top"
                    src={this.props.movie.poster_path} alt="Movie Poster"
                    />
                <Carousel.Caption>
                    {/* {this.props.movie} */}
                    {this.props.movie.title}
                    {this.props.movie.overview}
                    {this.props.movie.vote_average}
                    {this.props.movie.vote_count}
                    {this.props.movie.popularity}
                    {this.props.movie.release_date} 
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        );
    }
}

export default Movie;