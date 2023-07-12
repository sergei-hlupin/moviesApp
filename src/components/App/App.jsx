import React from 'react';
import styles from './App.module.scss';
import Logo from './Logo.png';
import Filter from '../Filter/Filter';
import Tabs from '../Tabs/Tabs';

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={Logo} alt="Логотип" />
      </div>
      <div className={styles.content}>
        <Filter />
        <div>
          <Tabs />
        </div>
      </div>
    </div>
  );
}

export default App;
