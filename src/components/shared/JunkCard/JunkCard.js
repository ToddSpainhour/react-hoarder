import React from 'react';
import { Link } from 'react-router-dom';
import junkShape from '../../../helpers/propz/junkShape';

import './JunkCard.scss';

class JunkCard extends React.Component {
  static propTypes = {
    junk: junkShape.junkShape,
  }

  render() {
    const { junk } = this.props;
    const singleLink = `/junk/${junk.id}`;
    const editLink = `/edit/${junk.id}`;
    return (
      <div className="JunkCard col-3">
        <div className="card">
          <img className="card-img-top" src={junk.itemImage} alt={junk.itemName}/>
            <div className="card-body">
              {/* <h5 className="card-title">{junk.itemName}</h5>
                <p className="card-text">{junk.itemDescription}</p> */}
                <Link className="btn btn-info" to={singleLink}><i className="far fa-eye"></i></Link>
                <Link className="btn btn-warning" to={editLink}><i className="far fa-edit"></i></Link>
            </div>
        </div>
      </div>
    );
  }
}

export default JunkCard;
