import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class Movies extends Component {





    render() {
        return (
            <Card style={{ width: '30.3rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong> Title:</strong> {this.props.title}
                        <img src={this.props.poster_path} alt="Movie Poster"/>
                     <strong> Overview:</strong> {this.props.overview} <strong> Vote Average: </strong>{this.props.vote_average} <strong> Vote Count:</strong> {this.props.vote_count} <strong> Popularity: </strong> {this.props.popularity} Release Date: {this.props.release_date} </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}
export default Movies;
