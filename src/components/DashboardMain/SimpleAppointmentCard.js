import React from 'react';
import styles from './SimpleAppointmentCard.module.css';

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className={styles.card}>
    <span className={styles.icon}>{icon}</span>
    <div className={styles.info}>
      <div className={styles.title}>{title}</div>
      <div className={styles.time}>{time}</div>
    </div>
  </div>
);

export default SimpleAppointmentCard;
