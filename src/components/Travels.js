import React from "react";

const travels = [
  {
    destination:
      "Phuket",
    country: "Thailand",
    image: 'https://flytrippers.com/wp-content/uploads/2017/08/phuket08.jpg'
  },
  {
    destination: "Kyoto",
    country: "Japan",
    image: "https://spectator.imgix.net/content/uploads/2018/07/japan.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550"
  },
  {
    destination: "Ta mère",
    country: "Croatia",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7jDmgGL3sB_SIIHdl55PRP6rYJntlPdOLm7udYYGONei3QSUqQ"
  },
  {
    destination: "Gagnoa",
    country: "Ivory Coast",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlzloKS8z1FCJv54E390QDLZ0pNl9Jldbh3-Vd9WRnrNCwTf2"
  },
  {
    destination: "Le diamant",
    country: "Madinina",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSJsLgjtBeMGhQknqI9hgV0ejdJs_wefcabf_RLEuhIpWPNkFU"
  }
];

const Travels = () => {
  return (
      <div>
          {travels.map(travel =>
          <div>
          <h1>{travel.destination}</h1>
          <h2>{travel.country}</h2>
          <img src={travel.image} alt = 'trip'/>
          <p>{travel.distance}</p>
          </div>
          )}
      </div>
  )}

export default Travels