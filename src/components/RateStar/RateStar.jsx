import React, { Component } from 'react';
import { Rate } from 'antd';
import Swapi from '../Swapi/Swapi';

class RateStar extends Component {
  swapi = new Swapi();

  state = {
    starNumber: '',
  };

  onChange = (value) => {
    localStorage.setItem(this.props.id, value);
    this.setState({ starNumber: value });
    this.swapi.setRating(this.props.id, this.props.guestSessionId, value);
  };

  render() {
    return (
      <span>
        <Rate
          onChange={this.onChange}
          defaultValue={localStorage.getItem(this.props.id) || this.state.starNumber}
          count={10}
        />
      </span>
    );
  }
}
export default RateStar;
