import React from 'react';
import styles from './Input.module.scss';

function Input({ title }) {
  return (
    <label htmlFor={title} className={styles.label}>
      <input id={title} className={styles.input} type="checkbox" />
      <span className={styles.span}>{title}</span>
    </label>
  );
}

export default Input;
