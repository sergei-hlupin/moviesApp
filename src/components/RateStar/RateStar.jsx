import React, { Component } from 'react';
import { Rate } from 'antd';
import PropTypes from 'prop-types';
import Swapi from '../../services/Swapi/Swapi';
import UseLocalStorage from '../../services/UseLocalStorage/UseLocalStorage';

class RateStar extends Component {
  static defaultProps = {
    onChange: () => {},
  };

  static propTypes = {
    onChange: PropTypes.func,
  };

  swapi = new Swapi();

  UseLocalStorage = new UseLocalStorage();

  state = {
    starNumber: '',
  };

  onChange = (value) => {
    this.UseLocalStorage.setValue(this.props.id, value);
    this.setState({ starNumber: value });
    this.swapi.setRating(this.props.id, this.props.guestSessionId, value);
  };

  render() {
    return (
      <span>
        <Rate
          onChange={this.onChange}
          defaultValue={this.UseLocalStorage.getId(this.props.id) || this.state.starNumber}
          count={10}
        />
      </span>
    );
  }
}
export default RateStar;
