import React from 'react';

import './JunkCard.scss';

class JunkCard extends React.Component {
  render() {
    const { junk } = this.props;
    return (
      <div className="JunkCard">
        {junk.itemName}
      </div>
    );
  }
}

export default JunkCard;
