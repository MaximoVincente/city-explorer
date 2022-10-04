import { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import NestedWeather from "./NestedWeather";



class Weather extends Component {





    render() {
        return (
            
            <>
                <Carousel>

                    {this.props.weatherData && this.props.weatherData.map((weather, index) => (
                        <Carousel.Item>
                            <NestedWeather
                                key={index}
                                weather={weather}
                            />
                        </Carousel.Item>

                    ))}

                </Carousel>
            </>
        );
    }
}
export default Weather;




// {/* < Accordion className = " mx-auto " >
//     <Accordion.Item className=" mx-auto" eventKey="0">
//         <Accordion.Header className="bg-info"><h5> Weather Forecast for {this.props.date}</h5></Accordion.Header>
//         <Accordion.Body className="bg-secondary">
//             <Card className='mx-auto' style={{ width: '30.3rem' }}>
//                 <ListGroup variant="flush" className='fw-bolder font-monospace'>
//                     <ListGroup.Item className="bg-info">
//                     </ListGroup.Item>
//                 </ListGroup>
//             </Card>
//         </Accordion.Body>
//     </Accordion.Item>
//             </Accordion > */}