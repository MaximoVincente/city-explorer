import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


class GeoDisplay extends React.Component {
    render() {
        return (
            <>
                {this.props.error &&
                    <Container>
                        <Alert variant="danger" className="my-3">
                            <Alert.Heading>
                                <>
                                    <h3>OOPS! {this.props.errorDisplay}. Please try another city.</h3>
                                </>
                            </Alert.Heading>
                        </Alert>
                    </Container>
                }
                <Container>
                    <Card>
                        <Card.Body>
                            <Card.Title className='fw-bolder font-monospace'><h2>{this.props.location.display_name}</h2></Card.Title>
                            <Card.Text>
                               Latitude: {this.props.location.lat} 
                                <br></br>Longitude: {this.props.location.lon}
                            </Card.Text>
                            <Card.Img variant="top" src={this.props.map} />
                        </Card.Body>
                    </Card>
                </Container>
            </>
        )
    }
}

export default GeoDisplay;