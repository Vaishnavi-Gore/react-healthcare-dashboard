import React from 'react';
import styles from './ActivityFeed.module.css'

const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

const activityData = [
  [40, 30, 60],
  [20, 35, 25],
  [30, 50, 40],
  [25, 60, 30],
  [20, 70, 50],
  [25, 45, 35],
  [40, 30, 60],
];


const barColors = ['#5dd5c8', '#d3d6dd', '#3a3a92'];

const ActivityFeed = () => {
  return (
    <div className={styles.ActivityFeed}
    >
      <div className={styles.activity_header}>
        <div className={styles.activity_header_h4}>
          <h4>Activity</h4>
        </div>
        <div>
        <span className={styles.activity_header_span}>3 appointment on this week</span>
        </div>
        
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '120px',
        paddingTop: '10px',
        alignItems :'center',
         backgroundcolor: 'white'
      }}>
        {activityData.map((bars, dayIdx) => (
          <div key={dayIdx} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '40px'
          }}>
            <div style={{
              display: 'flex',
              gap: '3px',
              alignItems: 'flex-end',
              height: '90px'
            }}>
              {bars.map((height, i) => (
                <div key={i} style={{
                  width: '6px',
                  height: `${height}px`,
                  borderRadius: '3px',
                  backgroundColor: barColors[i]
                }}></div>
              ))}
            </div>
            <span style={{
              marginTop: '6px',
              fontSize: '12px',
              color: '#666'
            }}>{days[dayIdx]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
