import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

const items = [
  {
    key: '1',
    label: 'Search',
  },
  {
    key: '2',
    label: 'Rated',
  },
];

function Header({ onChangeTab }) {
  return (
    <div className="header">
      <Tabs defaultActiveKey="1" items={items} onChange={onChangeTab} />
    </div>
  );
}

Header.defaultProps = {
  onChangeTab: () => {},
};

Header.propTypes = {
  onChangeTab: PropTypes.func,
};

export default Header;
