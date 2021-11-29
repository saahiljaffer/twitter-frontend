import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Twitter Statistics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(event) => {

              setUsername(event.target.value);
            }}
          ></input>
          <button
            className="font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700"
            value="Submit"
            onClick={() => {
              setLoading(true);
              fetch("http://localhost:8000/data/", { method: "POST", body: JSON.stringify({ username: username }) })
                .then((response) => response.json())
                .then(setData)
                .then(() => setLoading(false));
            }}
          >
            Submit
          </button>
        </div>
        <div>
          {data && data['url'] && (
            <img src={data['url']} />
          )}
          {loading && (<h1>Loading...</h1>)}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
