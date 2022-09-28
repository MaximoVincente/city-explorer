import React from "react";


class Forecast extends React.Component{



    render() {
        return (
            <>
                <h3 className= "text-center">{this.props.location} </h3>
                {this.props.weatherData.map((a,b) => {
                    return(
                        <div key={b}>
                            <h4>{arguments.date}</h4>
                            <h5>{a.description}</h5>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default Forecast;