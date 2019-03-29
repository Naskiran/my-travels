import React, { Component } from 'react';
import './App.css';
import Travel1 from './components/Travel';
import Travel2 from './components/Travel2';
class App extends Component {
  render() {
    return (
      <div>
      <Travel1
        destination = 'Phuket '
        country = 'Thailand'
        photo = 'https://flytrippers.com/wp-content/uploads/2017/08/phuket08.jpg'
        distance = ' 8000Km'/>
      <Travel2
        destination = 'Kyoto '
        country = 'Japan'
        photo = 'https://spectator.imgix.net/content/uploads/2018/07/japan.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550'
        distance = ' 7500Km'/>
      </div>
    );
  }
}

export default App;
