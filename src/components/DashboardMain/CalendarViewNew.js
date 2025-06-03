import React from 'react';
import styles from './CalendarView.module.css';
import {calendarAppointments,appointmentDetails}  from '../../data/calendarAppointments';


const CalendarViewNew = () => (
  
  <div className={styles.calendarcontainer}>
    <h3 className={styles.calendarheader}>{calendarAppointments[0].month}</h3>
    <div className={styles.weekdays}>
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
        <div key={day} className={styles.days}>{day}</div>
      ))}
      {[
    { date: 25 }, { date: 26, selected: true, time: '09:00' }, { date: 27 },
    { date: 28, time: '11:00' }, { date: 29 }, { date: 30 }, { date: 31, time: '09:00' }
  ].map( (d,i) => (
        <div key={i} className={styles.day}>
            <span className={d.selected ? "text-blue-600 font-bold" : ""}>{d.date}</span>
          {d.time && (
            <span className="mt-1 px-2 py-0.5 rounded-full bg-gray-200 text-xs">
              {d.time}
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Appointment Times */}
    <div className={styles.appointmenttime}>
      <div style={{paddingRight:'20px'}}> 
        <div className={styles.appointmentDentist}>
        <div>
          <p className="font-semibold">Dentist</p>
        </div>
        <div>
          <p className="text-sm">09:00–11:00 – Dr. Cameron Williamson</p>
        </div>
      </div>
      </div>
      
      <div className={styles.appointmentPhysiotherapy}>
        
       <div>
          <p className="font-semibold">Physiotherapy Appointment</p>
        </div>
        <div>
          <p className="text-sm">11:00–12:00 – Dr. Kevin Djones</p>
        </div>
       
    </div>
    </div>
  </div>
);
export default CalendarViewNew;