import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
class Weather extends Component {





    render() {
        return (
            <Card style={{ width: '30.3rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Weather Forecast: </strong> Low of {this.props.lowTemp}, high of {this.props.highTemp} with  {this.props.description}</ListGroup.Item>
                    <ListGroup.Item><strong>Date: </strong> {this.props.date} </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}
export default Weather;