import React from 'react';
import styles from '../styles/Divider.module.css';

function Divider({ name }) {
  return (
    <div className={styles.divider}>
      <div className={styles.dividerBar}></div>
      <div className={styles.dividerName}>{name}</div>
    </div>
  );
}

export default Divider;
