import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  editEvent = (e) => {
    e.preventDefault();
    const junkId = 'junk1';
    this.props.history.push(`/edit/${junkId}`);

  }

  render() {
    return (
      <div className="Home">
        <h4>Home component</h4>
        <button className="btn btn-danger" onClick={this.editEvent}>Edit the Junk</button>
        <Link to="/junk/1234556">View Single Junk </Link>
        <Link to="/new">Add New Junk </Link>
      </div>
    );
  }
}

export default Home;
