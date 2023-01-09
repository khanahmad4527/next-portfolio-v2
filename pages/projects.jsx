import React from "react";
import styles from "../styles/projects.module.css";
import { Heading } from "@chakra-ui/react";
import Repo from "../components/Repo/Repo";

function projects({ repo }) {
  return (
    <div className={styles.main}>
          <div className={styles.right}>
      <Heading>Projects</Heading>
      <div className={styles.repogrid}>
        {repo.items &&
          repo.items.map((elm) => {
            return <Repo key={elm.id} {...elm} />;
          })}
      </div>
    </div>
    </div>
  );
}

export default projects;

export async function getStaticProps() {
  const res2 = await fetch(
    `https://api.github.com/search/repositories?q=user:khan4527+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const repo = await res2.json();
  return {
    props: {
      repo,
    },
  };
}
