import React from "react";
import styles from "./experience.module.css";
import { getExperienceData } from "../../../lib/mongo/data";
import { Card } from "./Card";
import { getAchievementsData } from "../../../lib/mongo/data";

async function fetchExperienceData() {
  const { experience } = await getExperienceData();
  if (!experience) throw new Error("Failed to fetch data");

  return experience;
}

async function fetchAchievementsData() {
  const { achievements } = await getAchievementsData();
  if (!achievements) throw new Error("Failed to fetch data");

  return achievements;
}

export default async function Experience() {
  const experience = await fetchExperienceData();
  const achievements = await fetchAchievementsData();

  return (
    <section className="section" id="highlights">
      <h2 className="title">Highlights</h2>
      <p className="subTitle">
        My <span>Learnings</span>
      </p>
      <br />

      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.header}>Experience</h3>
          <div className={styles.items}>
            {experience.reverse()?.map((value) => (
              <Card
                key={value._id}
                name={value.name}
                position={value.position}
                duration={value.duration}
                description={value.description}
              />
            ))}
          </div>
        </div>

        <div className={styles.column}>
          <h3 className={styles.header}>Projects</h3>
          <div className={styles.items}>
            {achievements.map((value) => (
              <Card
                key={value._id}
                name={value.subTitle}
                position={value.title}
                duration={value.date}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
