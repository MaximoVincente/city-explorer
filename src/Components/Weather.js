import React from "react";


class Weather extends React.Component{



    render() {
        return (
            <>
                <h3 className= "text-center">{this.props.location} </h3>
                {this.props.weatherData.map((a,b) => {
                    return(
                        <div key={b}>
                            <h4>{a.date}</h4>
                            <h5>{a.description}</h5>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Weather;