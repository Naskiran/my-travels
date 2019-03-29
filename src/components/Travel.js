import React from 'react'
import './travel.css'
const Travel1 = ({ destination, country, photo, distance}) => (

    <div className="destination"> {destination}{country}
        <img className="pic" src={photo} alt={destination}/>
      {distance}
    </div>);





   // destination : 'Phuket',
   // country : 'Thailand',
    //photo : 'https://flytrippers.com/wp-content/uploads/2017/08/phuket08.jpg',
   // distance : '8000 Km'


//const voyage2 = {
  //  destination : 'Kyoto',
    //country : 'Japan',
    //photo : 'https://spectator.imgix.net/content/uploads/2018/07/japan.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550',
    //distance : '7500 Km'}


export default Travel1