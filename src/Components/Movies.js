import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
class Movies extends Component {





    render() {
        return (
            <Card className='mx-auto ' style={{ width: '30.3rem' }}>
                <Card.Header className='h-auto'>
                    <Card.Title className='fw-bolder font-monospace'>{this.props.title}</Card.Title>
                </Card.Header>
                <ListGroup variant="flush">
                        <Card.Img className='  mx-auto' variant="top"
                        src={this.props.poster_path} alt="Movie Poster" 
                        />     
                    <Card.Body>                         
                    <strong> Overview:</strong> {this.props.overview}
                        <strong>Vote Average: </strong>{this.props.vote_average} ⭐ <strong> Vote Count:</strong> {this.props.vote_count} <strong> Popularity: </strong> {this.props.popularity} Release Date: {this.props.release_date} 
                    </Card.Body>
                </ListGroup>
            </Card>
        );
    }
}
export default Movies;
