import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';


class Movies extends Component {


    render() {
        return (
            <>
        <Accordion className=" mx-auto ">
            <Accordion.Item className=" mx-auto" eventKey="0">
                <Accordion.Header className="bg-info"><h5> {this.props.title}</h5></Accordion.Header>
                <Accordion.Body className="bg-secondary">
                    <Card className='mx-auto' style={{ width: '30.3rem' }}>
                        <Card.Header className='h-auto'>
                            <Card.Title className='fw-bolder font-monospace'>{this.props.title}</Card.Title>
                        </Card.Header>
                        <ListGroup variant="flush">
                            <Card.Img className='py-1 h-50 mx-auto' variant="top"
                                src={this.props.poster_path} alt="Movie Poster"
                            />
                            <Card.Body>
                                <strong> Overview:</strong> {this.props.overview}
                                <strong>Vote Average: </strong>{this.props.vote_average} ⭐ <strong> Vote Count:</strong> {this.props.vote_count} <strong> Popularity: </strong> {this.props.popularity} Release Date: {this.props.release_date}
                            </Card.Body>
                        </ListGroup>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </>
        );
    }
}
export default Movies;

