import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from "../public/logo.svg"
import { attributes, react as HomeContent } from '../content/pages/home.md';

export default function Home() {
  let { title, cats } = attributes;

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
        <h2>{title}</h2>

        <ul>
          {cats.map((cat, k) => (
            <li key={k}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>

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
