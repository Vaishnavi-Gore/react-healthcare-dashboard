import React from 'react';
import styles from './DashboardMainContent.module.css';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';
import { healthIndicators } from '../../data/healthIndicators';

const DashboardMainContent = () => {
  const anatomyIndicators = healthIndicators.filter(h => h.part === 'Heart');
  const cardsIndicators = healthIndicators.filter(h => h.part !== 'Heart');

  return (
    <div className={styles.mainGrid}>
      <div className={styles.leftColumn}>
        <div className={styles.anatomyindicators}>
          <div style={{paddingRight:'10px'}}>
             <AnatomySection indicators={anatomyIndicators} />
          </div>
          
         <HealthStatusCards indicators={cardsIndicators} />
        </div>
        <ActivityFeed />
      </div>
      <div className={styles.rightColumn}>
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </div>
  );
};

export default DashboardMainContent;
