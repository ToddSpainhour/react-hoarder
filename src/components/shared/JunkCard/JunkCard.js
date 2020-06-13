import React from 'react';
import junkShape from '../../../helpers/propz/junkShape';

import './JunkCard.scss';

class JunkCard extends React.Component {
  static propTypes = {
    junk: junkShape.junkShape,
  }

  render() {
    const { junk } = this.props;
    return (
      <div className="JunkCard col-3">
        <div className="card">
          <img className="card-img-top" src={junk.itemImage} alt={junk.itemName}/>
            <div className="card-body">
              <h5 className="card-title">{junk.itemName}</h5>
                <p className="card-text">{junk.itemDescription}</p>
            </div>
        </div>
      </div>
    );
  }
}

export default JunkCard;
