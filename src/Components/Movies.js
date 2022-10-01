import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Movie from "./Movie";

class Movies extends Component {

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                        {this.props.movieData && this.props.movieData.map((movie, index) => (
                            <Movie 
                                key = {index} 
                                movie = {movie}
                                // title={movie.title}
                                // overview={movie.overview}
                                // vote_average={movie.vote_average}
                                // vote_count={movie.vote_count}
                                // poster_path={movie.poster_path}
                                // popularity={movie.popularity}
                                // release_date={movie.release_date} 
                                />))}
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default Movies;


            // <Card className='mx-auto ' style={{ width: '30.3rem' }}>
            //     <Card.Header className='h-auto'>
            //         <Card.Title className='fw-bolder font-monospace'>{this.props.title}</Card.Title>
            //     </Card.Header>
            //     <ListGroup variant="flush">
            //             <Card.Img className='  mx-auto' variant="top"
            //             src={this.props.poster_path} alt="Movie Poster" 
            //             />     
            //         <Card.Body>                         
            //         <strong> Overview:</strong> {this.props.overview}
            //             <strong>Vote Average: </strong>{this.props.vote_average} ⭐ <strong> Vote Count:</strong> {this.props.vote_count} <strong> Popularity: </strong> {this.props.popularity} Release Date: {this.props.release_date} 
            //         </Card.Body>
            //     </ListGroup>
            // </Card>