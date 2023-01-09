import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={Styles.main}>
      <div className={Styles.left}>
        <Link href={"/"}>Ahmad Khan</Link>
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/education"}>Education</Link>
      </div>
      <div className={Styles.right}>
        <div>@</div>
        <div>
          <Image
            src="./Profile.png"
            width={50}
            height={50}
            alt={"Ahmad"}
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
