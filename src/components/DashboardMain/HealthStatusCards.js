import React from 'react';
import styles from './HealthStatusCards.module.css';

const HealthStatusCards = ({ indicators }) => {
  return (
    <div className={styles.cardContainer}>
      {indicators.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.title}>{item.label}</div>
          <div className={styles.date}>Date: {item.date}</div>
          <div className={styles.bar} style={{ backgroundColor: item.color }} />
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
