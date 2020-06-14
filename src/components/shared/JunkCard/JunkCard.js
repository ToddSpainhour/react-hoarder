import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import junkShape from '../../../helpers/propz/junkShape';

import './JunkCard.scss';

class JunkCard extends React.Component {
  static propTypes = {
    junk: junkShape.junkShape,
    removeJunk: PropTypes.func.isRequired,
  }

  render() {
    const { junk, removeJunk } = this.props;
    const singleLink = `/junk/${junk.id}`;
    const editLink = `/edit/${junk.id}`;
    return (
      <div className="JunkCard col-3">
        <div className="card">
          <img className="card-img-top" src={junk.itemImage} alt={junk.itemName}/>
            <div className="card-body">
                <Link className="btn btn-info" to={singleLink}><i className="far fa-eye"></i></Link>
                <Link className="btn btn-warning" to={editLink}><i className="far fa-edit"></i></Link>
                <button className="btn btn-danger" onClick={() => removeJunk(junk.id)}><i className="fas fa-minus-square"></i></button>
            </div>
        </div>
      </div>
    );
  }
}

export default JunkCard;
