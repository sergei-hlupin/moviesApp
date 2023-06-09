import React, { Component } from 'react';
import { Input } from 'antd';
import { debounce } from 'lodash';
import PropTypes from 'prop-types';

class InputField extends Component {
  static defaultProps = {
    onChange: () => {},
  };

  static propTypes = {
    onChange: PropTypes.func,
  };

  onChange = (e) => {
    const value = e.target.value.replace(/ +/g, ' ').trim();
    this.props.onQuery(value);
  };

  render() {
    return <Input placeholder="Type to search..." onChange={debounce(this.onChange, 300)} />;
  }
}

export default InputField;
