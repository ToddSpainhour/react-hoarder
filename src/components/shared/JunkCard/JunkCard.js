import React from 'react';

import './JunkCard.scss';

class JunkCard extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div className="JunkCard">
        <h4>This is our junk card component</h4>
        {item.itemName}
      </div>
    );
  }
}

export default JunkCard;
