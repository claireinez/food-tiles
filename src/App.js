import React, { Component } from 'react';

import Header from './components/Header';
import NavBar from './components/NavBar';
import RestaurantList from './components/RestaurantList';
import { fitzrovia } from './api';

const getValues = (obj) =>
  Object.keys(obj).map((key) => obj[key]);

class App extends Component {
  render() {
    const location = 'Fitzrovia';
    const user = {
      firstName: 'Claire',
      lastName: 'Mitchell',
      country: 'UK'
    }

    return (
      <div className='app'>
        <NavBar user={ user } country={ user.country } />
        <Header location={ location } />
        <RestaurantList restaurants={ getValues(fitzrovia) } location={ location } country={ user.country } />
      </div>
    );
  }
}

export default App;
