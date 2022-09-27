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
                            <Card.Title>{this.props.location.display_name}</Card.Title>
                            <Card.Text>
                                {this.props.location.lat}
                                {this.props.location.lon}
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