import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { Button, TextField, Typography } from "@mui/material";

export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const generatorId = () => {
    return Math.random().toString("36").split(".")[1].substring(0, 8);
  };

  const addUser = (data) => {
    let id = generatorId();
    const user = {
      id,
      ...data,
    };
    console.log("user", user);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        height: "97vh",
        gap: "20px",
      }}
    >
      <div
        style={{ width: "35%", background: "#4d56", flexDirection: "column" }}
      >
        <form
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            margin: "20px",
            alignItems: "center",
            height: "80vh",
          }}
          onSubmit={handleSubmit(addUser)}
        >
          <Typography>Add Users</Typography>
          <TextField
            variant="outlined"
            label="Name"
            type="text"
            {...register("name", { required: true })}
          />
          <TextField
            variant="outlined"
            label="Last name"
            error={errors.lastName ? true : false }
            type="text"
            {...register("lastName", { required: true })}
          />
          <TextField
            variant="outlined"
            label="Gender"
            type="text"
            {...register("gender", { required: true })}
          />
          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </div>
      <div style={{ width: "60%", background: "#4d56" }}></div>
    </div>
    // <div className="container">
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main>
    //     <h1 className="title">
    //       Welcome to <a href="#">Next.js!</a>
    //     </h1>

    //     <p className="description">
    //       Get started by editing <code>pages/index.js</code>
    //     </p>

    //     <div className="grid">
    //       <Link href="/about">
    //       <a className="card">
    //         <h3>About &rarr;</h3>
    //       </a>
    //       </Link>

    //       <Link href="/contact">
    //       <a className="card">
    //         <h3>Contact &rarr;</h3>
    //       </a>
    //       </Link>
    //     </div>
    //   </main>

    //   <footer>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel" className="logo" />
    //     </a>
    //   </footer>

    //   <style jsx>{`
    //     .container {
    //       min-height: 100vh;
    //       padding: 0 0.5rem;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     main {
    //       padding: 5rem 0;
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer {
    //       width: 100%;
    //       height: 100px;
    //       border-top: 1px solid #eaeaea;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     footer img {
    //       margin-left: 0.5rem;
    //     }

    //     footer a {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }

    //     a {
    //       color: inherit;
    //       text-decoration: none;
    //     }

    //     .title a {
    //       color: #0070f3;
    //       text-decoration: none;
    //     }

    //     .title a:hover,
    //     .title a:focus,
    //     .title a:active {
    //       text-decoration: underline;
    //     }

    //     .title {
    //       margin: 0;
    //       line-height: 1.15;
    //       font-size: 4rem;
    //     }

    //     .title,
    //     .description {
    //       text-align: center;
    //     }

    //     .description {
    //       line-height: 1.5;
    //       font-size: 1.5rem;
    //     }

    //     code {
    //       background: #fafafa;
    //       border-radius: 5px;
    //       padding: 0.75rem;
    //       font-size: 1.1rem;
    //       font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    //         DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    //     }

    //     .grid {
    //       display: flex;
    //       align-items: center;
    //       justify-content: center;
    //       flex-wrap: wrap;

    //       max-width: 800px;
    //       margin-top: 3rem;
    //     }

    //     .card {
    //       margin: 1rem;
    //       flex-basis: 45%;
    //       padding: 1.5rem;
    //       text-align: left;
    //       color: inherit;
    //       text-decoration: none;
    //       border: 1px solid #eaeaea;
    //       border-radius: 10px;
    //       transition: color 0.15s ease, border-color 0.15s ease;
    //     }

    //     .card:hover,
    //     .card:focus,
    //     .card:active {
    //       color: #0070f3;
    //       border-color: #0070f3;
    //     }

    //     .card h3 {
    //       margin: 0 0 1rem 0;
    //       font-size: 1.5rem;
    //     }

    //     .card p {
    //       margin: 0;
    //       font-size: 1.25rem;
    //       line-height: 1.5;
    //     }

    //     .logo {
    //       height: 1em;
    //     }

    //     @media (max-width: 600px) {
    //       .grid {
    //         width: 100%;
    //         flex-direction: column;
    //       }
    //     }
    //   `}</style>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       padding: 0;
    //       margin: 0;
    //       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    //         Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    //         sans-serif;
    //     }

    //     * {
    //       box-sizing: border-box;
    //     }
    //   `}</style>
    // </div>
  );
}
