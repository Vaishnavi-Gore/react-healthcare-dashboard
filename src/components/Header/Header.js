
import React from "react";
import styles from "./Header.module.css";
import userimage from '../../assets/profileicon.jpg';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* <div className={styles.logo}>Healthcare.</div> */}
      <input type="text" placeholder="Search..." className={styles.searchBar} disabled />
      <div className={styles.icons}>
        <span className={styles.notification}>🔔</span>
        <div className={styles.profile}>
          <img src={userimage} alt="User Avatar" className={styles.avatar} />
          <span className={styles.userName}>John Doe</span>
        </div>
        <button className={styles.addButton}>+ Add</button>
      </div>
    </header>
  );
};

export default Header;
