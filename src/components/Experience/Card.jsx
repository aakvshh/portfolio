'use client'

import React, { useState } from 'react'
import styles from './experience.module.css'
// import { useState } from 'react';

export const Card = (props) => {

    const [displayInfo, setDisplayInfo] = useState(false);

    return (
      <div className={styles.item}>
          <div className={styles.cardTitle} onClick={() => setDisplayInfo(!displayInfo)}>
            <h3 className={styles.contentTitle}>{props.position}</h3>

              <span className={styles.icon}>{displayInfo ? "-" : "+"}</span>
          </div>
  
          <div className={`${displayInfo ? "displayContent" : ""} content`}>
              <div className={styles.titleAndDate}>
                <h3 className={styles.cardSubTitle}>{props.name}</h3>

                <span className={styles.duration}>{props.duration}</span>
              </div>
              <p className={styles.description}>{props.description}</p>
          </div>
      </div>
    )
  }