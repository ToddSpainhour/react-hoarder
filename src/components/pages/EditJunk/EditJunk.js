import React from 'react';

import junkData from '../../../helpers/data/junkData';
import authData from '../../../helpers/data/authData';

import './EditJunk.scss';

class EditJunk extends React.Component {
  state = {
    // itemDescription: '',
    // itemImage: '',
    itemName: '',
  }

  componentDidMount() {
    const editId = this.props.match.params.junkId;
    junkData.getSingleJunk(editId)
      .then((response) => {
        const junk = response.data;
        this.setState({
          itemDescription: junk.itemDescription,
          itemImage: junk.itemImage,
          itemName: junk.itemName,
        });
      })
      .catch((err) => console.error('cannot get junk to edit', err));
  }


  nameChange = (e) => {
    e.preventDefault();
    this.setState({ itemName: e.target.value });
  }


  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ itemDescription: e.target.value });
  }


  imageChange = (e) => {
    e.preventDefault();
    this.setState({ itemImage: e.target.value });
  }


  updateJunk = (e) => {
    e.preventDefault();
    const { junkId } = this.props.match.params;
    const {
      itemDescription,
      itemImage,
      itemName,
    } = this.state;
    const updatedJunk = {
      itemDescription,
      itemImage,
      itemName,
      uid: authData.getUid(),
    };

    junkData.putJunk(junkId, updatedJunk)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('cannot update junk', err));
  }

  render() {
    const editId = this.props.match.params.junkId;
    const {
      itemDescription,
      itemImage,
      itemName,
    } = this.state;

    return (
      <div className="EditJunk col-12">
        <h4>EditJunk Component</h4>
    <p>The Junk id is... {editId}</p>

    <form className="col-6 offset-3 text-left">
                  <div className="form-group">
                    <label htmlFor="item-name">Item Name</label>
                      <input
                      type="text"
                      className="form-control"
                      value={itemName}
                      id="item-name"
                      onChange={this.nameChange}
                      />
                  </div>

                  <div className="form-group">
                    <label htmlFor="item-description">Item Description</label>
                      <input
                      type="text"
                      className="form-control"
                      value={itemDescription}
                      id="item-description"
                      onChange={this.descriptionChange}
                      />
                  </div>

                  <div className="form-group">
                    <label htmlFor="item-image">Item Image URL</label>
                      <input
                      type="text"
                      className="form-control"
                      value={itemImage}
                      id="item-image"
                      onChange={this.imageChange}
                      />
                  </div>

                <button type="submit" className="btn btn-primary" onClick={this.updateJunk}>Edit This Junk!</button>
              </form>
      </div>
    );
  }
}

export default EditJunk;
