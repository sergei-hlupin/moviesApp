import React from 'react';
import Tab from '../Tab/Tab';
import styles from './Tabs.module.scss';

function Tabs() {
  return (
    <div className={styles.tabs}>
      <Tab title="Самый дешевый" />
      <Tab title="Самый быстрый" />
      <Tab title="Оптимальный" />
    </div>
  );
}
export default Tabs;
