import React from 'react';
import styles from './Sidebar.module.css';
import { navigationLinks } from '../../data/navigationLinks';
import { FaStethoscope, FaHistory, FaCalendarAlt, FaClipboardList, FaChartBar, FaComments, FaHeadset, FaCog } from 'react-icons/fa';

const iconMap = {
  Dashboard: <FaStethoscope />,
  History: <FaHistory />,
  Calendar: <FaCalendarAlt />,
  Appointments: <FaClipboardList />,
  Statistics: <FaChartBar />,
  Chat: <FaComments />,
  Support: <FaHeadset />,
  Setting: <FaCog />,
};

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar_logo}>
        <span className={styles.logo_highlight}>Health</span>care.
      </div>

      <div className={styles.sidebar_section}>
        <p className={styles.sidebar_section_title}>General</p>
        <ul className={styles.sidebar_nav}>
          {navigationLinks.map((link, index) => (
            <li className={styles.sidebar_nav_item} key={index}>
              <span className={styles.sidebar_icon}>{iconMap[link.label]}</span>
              <span className={styles.sidebar_label}>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.sidebar_section}>
        <p className={styles.sidebar_section_title}>Tools</p>
        <ul className={styles.sidebar_nav}>
          {['Chat', 'Support'].map((label, index) => (
            <li className={styles.sidebar_nav_item} key={index}>
              <span className={styles.sidebar_icon}>{iconMap[label]}</span>
              <span className={styles.sidebar_label}>{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.sidebar_section}>
        <ul className={styles.sidebar_nav}>
          <li className={styles.sidebar_icon}>
            <span className={styles.sidebar_icon}>{iconMap['Setting']}</span>
            <span className={styles.sidebar_label}>Setting</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
