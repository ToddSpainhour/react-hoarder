import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import Auth from '../components/Auth/Auth';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Home from '../components/Home/Home';
import NewJunk from '../components/NewJunk/NewJunk';
import EditJunk from '../components/EditJunk/EditJunk';
import SingleJunk from '../components/SingleJunk/SingleJunk';


import fbConnection from '../helpers/data/connection';

fbConnection();


class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Auth />
        <Home />
        <NewJunk />
        <EditJunk />
        <SingleJunk />
      </div>
    );
  }
}

export default App;
