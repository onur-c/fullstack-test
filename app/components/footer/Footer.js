import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div>©2023 Lamamia. All rights reserved.</div>
      <div className={styles.socials}>
        <Image
          src="/1.png"
          className={styles.socialIcon}
          height={16}
          width={16}
          alt="Onur Dev"
        />
        <Image
          src="/2.png"
          className={styles.socialIcon}
          height={16}
          width={16}
          alt="Onur Dev"
        />
        <Image
          src="/3.png"
          className={styles.socialIcon}
          height={16}
          width={16}
          alt="Onur Dev"
        />
        <Image
          src="/4.png"
          className={styles.socialIcon}
          height={16}
          width={16}
          alt="Onur Dev"
        />
      </div>
    </div>
  );
}

export default Footer;
