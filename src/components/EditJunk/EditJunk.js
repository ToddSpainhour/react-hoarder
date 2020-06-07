import React from 'react';

import './EditJunk.scss';

class EditJunk extends React.Component {
  render() {
    const editId = this.props.match.params.junkId;
    return (
      <div className="EditJunk">
        <h4>EditJunk Component</h4>
    <p>The Junk id is... {editId}</p>
      </div>
    );
  }
}

export default EditJunk;
