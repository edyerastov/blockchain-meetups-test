import React, { Component } from 'react';
import './App.sass';
import Hero from '../Hero';
import CityEvents from '../CityEvents';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const allEvents = [
  {
    img: 'event_4.png',
    title: 'Your Event Title',
    subtitle: 'The subtitle should be truncate...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae odio fringilla justo euismod suscipit vel in mauris. Suspendisse cursus viverra augue, vel pretium dolor tincidunt sit amet…',
    author: 'Tokunaga Yae',
    attending: '123'
  },
  {
    img: 'event_5.png',
    title: 'Your Event Title',
    subtitle: 'The subtitle should be truncate...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae odio fringilla justo euismod suscipit vel in mauris. Suspendisse cursus viverra augue, vel pretium dolor tincidunt sit amet…',
    author: 'Slawomir Pelikan',
    attending: '123'
  },
  {
    img: 'event_6.png',
    title: 'Your Event Title',
    subtitle: 'The subtitle should be truncate...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae odio fringilla justo euismod suscipit vel in mauris. Suspendisse cursus viverra augue, vel pretium dolor tincidunt sit amet…',
    author: 'Ivan Morais',
    attending: '123'
  },
  {
    img: 'event_7.png',
    title: 'Your Event Title',
    subtitle: 'The subtitle should be truncate...',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae odio fringilla justo euismod suscipit vel in mauris. Suspendisse cursus viverra augue, vel pretium dolor tincidunt sit amet…',
    author: 'Ilya Vasin',
    attending: '123'
  }
];

export const EventContext = React.createContext([]);

class App extends Component {
  render() {
    return (
      <EventContext.Provider value={allEvents}>
        <Router>
          <Switch>
            <Route exact path='/' component={Hero} />
            <Route path='/events' component={CityEvents} />
          </Switch>
        </Router>
      </EventContext.Provider>
    );
  }
}

export default App;
