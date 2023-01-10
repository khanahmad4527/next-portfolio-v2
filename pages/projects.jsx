import React from "react";
import styles from "../styles/projects.module.css";
import { Heading } from "@chakra-ui/react";
import Repo from "../components/Repo/Repo";
import Link from "next/link";

function projects({ repo }) {
  return (
    <div className={styles.main}>
      <div className={styles.right}>
        <Heading>Projects</Heading>
        <div className={styles.repogrid}>
          {repo.items &&
            repo.items.map((elm) => {
              return (
                <Link key={elm.id} href={elm.git_url}>
                  <Repo key={elm.id} {...elm} />
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default projects;

export async function getStaticProps() {
  const res2 = await fetch(
    `https://api.github.com/search/repositories?q=user:khanahmad4527+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  const repo = await res2.json();
  return {
    props: {
      repo,
    },
  };
}
