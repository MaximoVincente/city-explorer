import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class LocationForm extends React.Component{

    render(){
        return(
            <>
                <Form onSubmit={this.props.handleSearch}>
                    <Form.Group className="mb-3" controlId="city">
                        <Form.Label>City Explorer</Form.Label>
                        <Form.Control onChange={this.props.handleInput} type="text" placeholder="Search for a City" />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
            </>
        );
    }
}

export default LocationForm;