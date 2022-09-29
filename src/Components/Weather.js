import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
class Weather extends Component {





    render() {
        return (
            <Card style={{ width: '30.3rem' }}>
                <ListGroup variant="flush" className='fw-bolder font-monospace'>
                    <ListGroup.Item ><strong>Weather Forecast: </strong> <strong> Low of </strong>{this.props.lowTemp}, high of {this.props.highTemp} with  {this.props.description}</ListGroup.Item>
                    <ListGroup.Item><strong>Date: </strong> {this.props.date} </ListGroup.Item>
                </ListGroup>
            </Card>
        );
    }
}
export default Weather;