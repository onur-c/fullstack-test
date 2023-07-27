import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Fetching failed");
  }

  return res.json();
}

async function Blog() {
  const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {data.map((data) => (
        <Link
          href={`blog/${data._id}`}
          className={styles.container}
          key={data.id}
        >
          <div className={styles.item}>
            <div className={styles.content}>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
            </div>
            <div className={styles.imgContainer}>
              <Image className={styles.img} src={data.img} fill={true} alt="" />
            </div>
          </div>{" "}
        </Link>
      ))}
    </div>
  );
}

export default Blog;
