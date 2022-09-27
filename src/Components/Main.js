import axios from 'axios';
import React from 'react';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '', // as the user types in a location, updates serachQuery 
            location: {},
            map: '',
            error: false,
            errorDisplay: '',

        };
    }
    handleInput = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    // async await
    handleSearch = async (event) => {
        event.preventDefault();
        //code runs in the try block
        try {
            const APILocation = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_IQ_KEY}&q=${this.state.searchQuery}&format=json`;
            const responseLocation = await axios.get(APILocation);
            this.setState({ location: responseLocation.data[0] }, this.getMap);
            // if there is an ERROR, code runs in the catch block
        } catch (error) {
            this.setState({ error: true });
            this.setState({ errorDisplay: 'The city you entered does not exist' });
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
                {this.state.location.place_id &&
                    <>
                        <h2>This location is: {this.state.location.display_name}</h2>
                        <h2>The lat is: {this.state.location.lat}</h2>
                        <h2>The lon is: {this.state.location.lon}</h2>
                        <img src={this.state.map} alt={this.state.location.display_name} />
                    </>
                }
                {this.state.error &&
                    <h2> Oops! {this.state.errorDisplay}</h2>
                }
            </>
        );
    }
}

export default Main;