import React from 'react';
import { Link } from 'react-router-dom';

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
  const { junkId } = this.props.match.params;
  const editLink = `/edit/${junkId}`;
  return (
    <div className="SingleJunk col-12">
      <img className="card-img-top" src={junk.itemImage} alt={junk.itemName}/>
      <h3>{junk.itemName}</h3>
      <p>{junk.itemDescription}</p>
      <Link className="btn btn-warning" to={editLink}><i className="far fa-edit"></i></Link>
      <button className="btn btn-danger" onClick={this.removeJunk}><i class="fas fa-minus-square"></i></button>
    </div>
  );
}
}

export default SingleJunk;
