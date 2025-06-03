import React from 'react';
import styles from './UpcomingSchedule.module.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import upcomingAppointments  from '../../data/upcomingAppointments';

const UpcomingSchedule = () => {
  return (
    <div className={styles.schedule}>
      <h3 style={{marginTop: '0px'}}>The Upcoming Schedule</h3>
      {Object.keys(upcomingAppointments).map(day => (
        <div key={day} className={styles.dayGroup}>
          <div className={styles.dayTitle}>{day}</div>
          <div style={{display:'flex',flexDirection:'row',paddingRight:'70px',gap:'40px'
}}>{upcomingAppointments[day].map((appt, index) => (
            <SimpleAppointmentCard
              key={index}
              title={appt.title}
              time={appt.time}
              icon={appt.icon}
            />
          ))}

          </div>
          
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
