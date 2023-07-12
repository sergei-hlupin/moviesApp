import React from 'react';
import Input from '../UI/Input/Input';
import styles from './Filter.module.scss';

function Filter() {
  return (
    <div className={styles.filter}>
      <div className={styles.title}>Количество пересадок</div>
      <Input title="Все" />
      <Input title="Без пересадок" />
      <Input title="1 пересадка" />
      <Input title="2 пересадки" />
      <Input title="3 пересадки" />
    </div>
  );
}

export default Filter;
