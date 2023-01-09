import React from "react";
import Styles from "./Repo.module.css";
import {
  AiOutlineFolder,
  AiOutlineStar,
  AiOutlineFork,
  AiOutlineRightCircle,
} from "react-icons/ai";

function Repo({ name, full_name, stargazers_count, forks_count, language }) {
  return (
    <div className={Styles.main}>
      <div className={Styles.reponame}>
        <AiOutlineFolder />
        {name}
      </div>
      <div>{full_name}</div>
      <div className={Styles.botm}>
        <div>
          <div className={Styles.repostar}>
            <AiOutlineStar /> {stargazers_count}
          </div>
          <div className={Styles.repofork}>
            <AiOutlineFork /> {forks_count}
          </div>
        </div>
        <div>
          <div className={Styles.blink}>
            {language ? <AiOutlineRightCircle /> : ""}
          </div>
          <div className={Styles.language}>{language}</div>
        </div>
      </div>
    </div>
  );
}

export default Repo;
