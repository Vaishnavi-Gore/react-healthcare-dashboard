import React from 'react';
import styles from './CalendarView.module.css';
import calendarAppointments  from './../../data/calendarAppointments';
const days = [
    { date: 25 }, { date: 26, selected: true, time: '09:00' }, { date: 27 },
    { date: 28, time: '11:00' }, { date: 29 }, { date: 30 }, { date: 31, time: '09:00' }
  ];
  const time_slot_selected = {
    color: "blue",
    backgroundColor: "lightgray",
    padding: "10px",
  };
    const time_slot_Upcomming = {
      backgroundColor:" #e0e7ff",
  color:" #4338ca"
  };

const CalendarView = () => (
  
  <div className={styles.calendarcontainer}>
    <h3 className={styles.calendarheader}>{calendarAppointments[0].month + " " +calendarAppointments[0].year}</h3>
    <div className={styles.weekdays}>
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <div key={day} className={styles.days}>{day}</div>
      ))}
      {calendarAppointments[0].days.map( (d,i) => (
        <div key={i} className={styles.day}>
            <span className="">{d.date}</span>
            <div className={styles.time_slots}>
                {d.times.map((t,index) => (
            <div key={i+100} className={time_slot_selected} style={t.selected ? {time_slot_selected} : {}}> 
             {t.selected ?
             <div>
               <span style={{color:'white',background:'blue',borderRadius:'10px'}}>{t.time}</span>
            </div>: t.upcoming ? <div>
               <span style={{color:'white',background:'grey',borderRadius:'10px'}} >{t.time}</span>
             </div>: <div>
               <span >{t.time}</span>
             </div>}
            </div>
            ))}
            </div>
          
        </div>
       
      ))}
      
    </div>

    {/* Appointment Times */}
    <div className={styles.appointmenttime}>
      <div style={{paddingRight:'20px'}}> 
        <div className={styles.appointmentDentist}>
        <div>
          <p className={styles.TopBottomzeromargin}><b>Dentist</b></p>
        </div>
        <div>
          <p className={styles.TopBottomzeromargin} style={{fontSize: "0.8rem",
  color: "gray"}}>09:00–11:00 – Dr. Cameron Williamson</p>
        </div>
      </div>
      </div>
      
      <div className={styles.appointmentPhysiotherapy}>
        
       <div>
          <p className={styles.TopBottomzeromargin}>Physiotherapy Appointment</p>
        </div>
        <div>
          <p className={styles.TopBottomzeromargin} style={{fontSize: "0.8rem",
  color: "gray"}}>11:00–12:00 – Dr. Kevin Djones</p>
        </div>
       
    </div>
    </div>
  </div>
);
export default CalendarView;