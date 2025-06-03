import React from 'react';
import styles from './AnatomySection.module.css';
import anatomyImg from '../../assets/Avtar.png';

const AnatomySection = ({ indicators }) => {
  return (
    <div className={styles.anatomySection}>
      <img src={anatomyImg} alt="Human Anatomy" className={styles.image} />
      {indicators.map((item, index) => (
        <div key={index} className={styles.indicator} style={{ backgroundColor: item.color }}>
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default AnatomySection;
