import React from 'react';

import authData from '../../../helpers/data/authData';
import junkData from '../../../helpers/data/junkData';

import './NewJunk.scss';

class NewJunk extends React.Component {
  state = {
    itemDescription: '',
    itemImage: '',
    itemName: '',
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

  saveJunk = (e) => {
    e.preventDefault();
    const {
      itemDescription,
      itemImage,
      itemName,
    } = this.state;
    const newJunk = {
      itemDescription,
      itemImage,
      itemName,
      uid: authData.getUid(),
    };

    junkData.postJunk(newJunk)
      .then(() => this.props.history.push('/home'))
      .catch((err) => console.error('cannot save new junk', err));
  }

  render() {
    const {
      itemDescription,
      itemImage,
      itemName,
    } = this.state;

    return (
      <div className="NewJunk col-12">
        <h4>NewJunk component</h4>
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

                <button type="submit" className="btn btn-primary" onClick={this.saveJunk}>Add More Junk!</button>
              </form>
      </div>
    );
  }
}

export default NewJunk;
