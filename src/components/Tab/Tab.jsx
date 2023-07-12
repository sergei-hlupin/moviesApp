import React from 'react';
import styles from './Tab.module.scss';

function Tab({ title }) {
  return <div className={styles.tab}>{title}</div>;
}

export default Tab;
