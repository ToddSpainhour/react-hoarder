import React from 'react';

import authData from '../../../helpers/data/authData';
import junkData from '../../../helpers/data/junkData';
import JunkCard from '../../shared/JunkCard/JunkCard';

import './Home.scss';

class Home extends React.Component {
  state = {
    junkItems: [],
  }

  getJunk = () => {
    const uid = authData.getUid();
    junkData.getJunkByUid(uid)
      .then((junkItems) => this.setState({ junkItems }))
      .catch((err) => console.error('unable to get junk Items', err));
  }

  componentDidMount() {
    this.getJunk();
  }

  editEvent = (e) => {
    e.preventDefault();
    const junkId = 'junk1';
    this.props.history.push(`/edit/${junkId}`);
  }

  render() {
    const { junkItems } = this.state;
    const buildJunkCards = junkItems.map((junk) => (
      <JunkCard junk={junk} key={junk.id}/>
    ));
    return (
      <div className="Home">
        <h4>Home component</h4>
        <div className="d-flex flex-wrap">
          {buildJunkCards}
        </div>
      </div>
    );
  }
}

export default Home;
