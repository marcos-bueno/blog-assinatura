import { GetStaticProps } from "next";
import Head from "next/head";
import Prismic from "@prismicio/client";
import { getPrismicClient } from "../../services/prismic";
import styles from "./styles.module.scss";

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Blog Assinatura</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>03 de Abril de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              vero architecto, possimus facere culpa eligendi illum corporis
              ratione consequatur ut perferendis sed odit! Ullam est quos
              tempora voluptates quis ex.
            </p>
          </a>
          <a href="#">
            <time>03 de Abril de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              vero architecto, possimus facere culpa eligendi illum corporis
              ratione consequatur ut perferendis sed odit! Ullam est quos
              tempora voluptates quis ex.
            </p>
          </a>
          <a href="#">
            <time>03 de Abril de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              vero architecto, possimus facere culpa eligendi illum corporis
              ratione consequatur ut perferendis sed odit! Ullam est quos
              tempora voluptates quis ex.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "publication")],
    {
      fetch: ["publication.title", "publication.content"],
      pageSize: 100,
    }
  );

  return {
    props: {},
  };
};
