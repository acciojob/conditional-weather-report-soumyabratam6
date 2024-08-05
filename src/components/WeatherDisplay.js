import React from "react";
function WeatherDisplay({weather}){
    const tempColor = weather.temperature >20? "red":"blue";
    return(
        <>
            <p>Temperature:<span style={{color:tempColor}}>{weather.temperature}</span></p>
            <p>Conditions: {weather.conditions}</p>
        </>
    );
}
export default WeatherDisplay;