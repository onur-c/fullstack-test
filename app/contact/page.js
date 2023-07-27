import React from "react";
import styles from "./page.module.css";
import Button from "../components/Button/Button";
import Image from "next/image";

// static metadata
export const metadata = {
  title: "Contact | Onur Dev",
  description: "This page contains contact form",
};

function Contact() {
  return (
    <div className={styles.container}>
      <h1>Let's Keep in Touch!</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />
          <input
            type="text"
            placeholder="Your Email"
            className={styles.input}
          />
          <textarea
            className={styles.textarea}
            placeholder="Your Message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
