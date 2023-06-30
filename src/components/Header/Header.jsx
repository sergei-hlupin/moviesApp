import React from 'react';
import { Tabs } from 'antd';

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

export default Header;
