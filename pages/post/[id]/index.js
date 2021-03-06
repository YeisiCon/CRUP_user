import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link';

export default function HomeDinamic() {

  const router = useRouter();
  const { id } = router.query;

  const users = [
    { id: 1, name: "danilojs", },
    { id: 2, name: "josue129", },
    { id: 3, name: "mario2020" },
    { id: 4, name: "maria1994" },
  ]

  return (
    <div className="container">
      <Head>
        <title>Dynamic pages</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Dynamic pages
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <Link href="/post/[id]/[name]" as={`/post/${id}/about`}>
            <a className="card">
              <h3>About &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
          <Link href="/post/[id]/[name]" as={`/post/${id}/contact`}>
            <a className="card">
              <h3>Contact &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Link>
          {
            users.map(({name: userName, id: userId}) => (
              <Link key={userId} href="/post/[id]/[name]" as={`/post/${id}/${userName}`}>
                <a className="card">
                  <h3>{userName} &rarr;</h3>
                  <p>Perfil del usuario: {userName}.</p>
                  <p> Haz click para visitar su perfil.</p>
                </a>
              </Link>
            ))
          }

        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
          width: 300px;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
