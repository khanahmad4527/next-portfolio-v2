import React from "react";
import styles from "../styles/education.module.css";

function education() {
  return (
    <div className={styles.main}>
      <div className={styles.edu}>
        <div>
          <div className={styles.current}>1</div>
          <div>
            <h2>Trainee at Masai School</h2>
            <p>October 2021 - Present</p>
          </div>
        </div>

        <div>
          <div>2</div>
          <div>
            <h2>Trainee at Masai School</h2>
            <p>October 2021 - Present</p>
          </div>
        </div>

        <div>
          <div>3</div>
          <div>
            <h2>Trainee at Masai School</h2>
            <p>October 2021 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default education;
