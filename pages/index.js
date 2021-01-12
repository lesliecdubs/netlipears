import { GetStaticProps } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from "../public/logo.svg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netlipears</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">
            <Logo className="w-2/5 h-auto mx-auto" />
            <span className="relative leading-tight text-center text-8xl font-display text-blue">Netlipears</span>
          </a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://leslie.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by 👩🏻‍💻 Leslie Cohn-Wein
        </a>
      </footer>
    </div>
  )
}

// css wheel! https://codepen.io/BAUS/pen/ZYPXRP/
// example: https://nextjs-netlify-blog-template.netlify.app/posts
// see code: https://github.com/wutali/nextjs-netlify-blog-template/blob/master/src/lib/posts.ts
// export const getStaticProps: GetStaticProps = async () => {
//   const posts = listPostContent(1, config.posts_per_page);
//   const tags = listTags();
//   const pagination = {
//     current: 1,
//     pages: Math.ceil(countPosts() / config.posts_per_page),
//   };
//   return {
//     props: {
//       posts,
//       tags,
//       pagination,
//     },
//   };
// };