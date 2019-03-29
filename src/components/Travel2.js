import React from 'react'
import './travel.css'
const Travel2 = ({ destination, country, photo, distance}) => (

    <div className="destination2"> {destination}{country}
        <img className="pic2" src={photo} alt={destination}/>
      {distance}
    </div>);




export default Travel2