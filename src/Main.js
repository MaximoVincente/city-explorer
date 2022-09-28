import axios from 'axios';
import React from 'react';
import GeoDisplay from './Components/GeoDisplay';
import LocationForm from './Components/LocationForm';
import Forecast from './Components/Forecast';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '', // as the user types in a location, updates serachQuery 
            location: {},
            map: '',
            error: false,
            displayMap:false,
            errorDisplay: '',
            weatherData: [],

        };
    }
    handleInput = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    // async await
    handleSearch = async (event) => {
        event.preventDefault();
        this.setState({error:false});
        //code runs in the try block
        try {
            const APILocation = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
            const responseLocation = await axios.get(APILocation);
            this.setState({ location: responseLocation.data[0], displayMap: true}, this.loadData);
            // if there is an ERROR, code runs in the catch block
        } catch (error) {
            this.setState({ error: true,
            displayMap: false });
            this.setState({ errorDisplay: error.message});
        }
    }

    getMap = async () => {
        this.setState({
            map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_IQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`,
        })
    }

    getWeather = async () => {
        try{
            const response = await axios.get(`http://localhost:3001/weather?searchQuery=${this.state.searchQuery}&lat=${this.state.location.lat}&lon=${this.state.location.lon}`);
            console.log(response);
            this.setState({weatherData: response.data});
        }catch (error){
            this.setState({error: true,
            displayWeather: false});
            this.setState({errorDisplay: error.message});
        }

    }

    loadData = async () => {
        await this.getMap();
        await this.getWeather();
    }

    render() {
        return (
            <>
            <LocationForm handleInput={this.handleInput} handleSearch={this.handleSearch} />
                    <GeoDisplay
                        location= {this.state.location}
                        map= {this.state.map}
                        errorDisplay= {this.state.errorDisplay}
                        error= {this.state.error}
                    />
            <Forecast location={this.state.location.display_name}
                    weatherData= {this.state.weatherData}/>
            </>
        );
    }
}

export default Main;