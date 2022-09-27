import axios from 'axios';
import React from 'react';
import GeoDisplay from './Components/GeoDisplay';

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
            this.setState({ location: responseLocation.data[0], displayMap: true},  this.getMap);
            // if there is an ERROR, code runs in the catch block
        } catch (error) {
            this.setState({ error: true,
            displayMap: false });
            this.setState({ errorDisplay: error.message});
        }
    }

    getMap = async (e) => {
        this.setState({
            map: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_IQ_KEY}&center=${this.state.location.lat},${this.state.location.lon}&zoom=12`,
        })
    }

    render() {
        return (
            <>
                <input onChange={this.handleInput} placeholder="search for a city"></input>
                <button onClick={this.handleSearch}>Explore!</button>
                    <GeoDisplay
                        location= {this.state.location}
                        map= {this.state.map}
                        errorDisplay= {this.state.errorDisplay}
                        error= {this.state.error}
                    />
            </>
        );
    }
}

export default Main;