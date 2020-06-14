import React from 'react';
import junkData from '../../../helpers/data/junkData';

import './SingleJunk.scss';

class SingleJunk extends React.Component {
  state = {
    junk: {},
  }

  componentDidMount() {
    const { junkId } = this.props.match.params;
    junkData.getSingleJunk(junkId)
      .then((response) => this.setState({ junk: response.data }))
      .catch((err) => console.error('cannot get single junk', err));
  }

removeJunk = () => {
  const { junkId } = this.props.match.params;
  junkData.deleteJunk(junkId)
    .then(() => this.props.history.push('/home'))
    .catch((err) => console.error('cannot delete junk', err));
}

render() {
  const { junk } = this.state;
  return (
    <div className="SingleJunk">
      <h4>SingleJunk component</h4>
      <img className="card-img-top" src={junk.itemImage} alt={junk.itemName}/>
      <h3>{junk.itemName}</h3>
      <p>{junk.itemDescription}</p>
      <button className="btn btn-danger" onClick={this.removeJunk}><i class="fas fa-minus-square"></i></button>
    </div>
  );
}
}

export default SingleJunk;
