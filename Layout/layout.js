import React from 'react';
import styles from '../src/styles/layout.module.css';

const layout = ({ children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.board__title}>Board.</div>
      {children}
    </div>
  );
};

export default layout;
