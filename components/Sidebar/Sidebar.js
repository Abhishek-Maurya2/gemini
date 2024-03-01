"use client";
import { FiHelpCircle, FiMenu, FiPlus, FiSettings } from "react-icons/fi";
import styles from "./Sidebar.module.css";
import React, { useState } from "react";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className={`${styles.sidebar} ${toggle ? styles.expanded : ""}`}>
      <div className={styles.top}>
        <button className={styles.menu} onClick={toggleHandler}>
          <FiMenu />
        </button>
        <button className={`${styles.newchat} ${toggle && styles.expandedChat}`}>
          <FiPlus />
          {toggle && <p className={styles.newchattext}>New Chat</p>}
        </button>
      </div>
      <div className={styles.bottom}>
        <button className={`${styles.settings} ${toggle ? styles.movedUp : ''}`}>
          <FiHelpCircle />
          {toggle && <p className={styles.Icontext}>Help</p>}
        </button>
        <button className={`${styles.settings} ${toggle ? styles.movedUp : ''}`}>
          <FiSettings />
          {toggle && <p className={styles.Icontext}>Settings</p>}
        </button>
        {toggle && <p className={styles.credits}>Made by Abhishek</p>}
      </div>
    </div>
  );
};
export default Sidebar;