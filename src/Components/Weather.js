import { Component } from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';


class Weather extends Component {





    render() {
        return (
            
            <>
                <Accordion className=" mx-auto ">
                    <Accordion.Item  className=" mx-auto" eventKey="0">
                        <Accordion.Header className="bg-info"><h5> Weather Forecast for {this.props.date}</h5></Accordion.Header>
                        <Accordion.Body className="bg-secondary">
                        <Card className='mx-auto' style={{ width: '30.3rem' }}>
                            <ListGroup variant="flush" className='fw-bolder font-monospace'>
                                    <ListGroup.Item className="bg-info"> <strong> Low of </strong>{this.props.lowTemp}, high of {this.props.highTemp} with  {this.props.description}</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </>
        );
    }
}
export default Weather;


