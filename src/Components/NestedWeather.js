import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


class NestedWeather extends Component {

    render() {
        return (

            <>
               
                <div>
                    <strong> Low of </strong>
                </div>
                <Carousel.Caption>
                    <strong> Low of </strong>{this.props.lowTemp}, high of {this.props.highTemp} with  {this.props.description}
                </Carousel.Caption>
            </>

        );
    }
}

export default NestedWeather;