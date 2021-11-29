import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>
          <input
            type="text"
            value={username}
            placeholder="username"
            onChange={(event) => {
              console.log(event.target.value);
              setUsername(event.target.value);
            }}
          ></input>
          <button
            className="font-sans font-medium py-2 px-4 border rounded bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700"
            value="Submit"
            onClick={() => {
              fetch("http://localhost:8000/data/", { method: "POST", body: JSON.stringify({ username: username }) })
                .then((response) => response.json())
                .then(setData);
            }}
          >
            Submit
          </button>
        </div>
        <div>
          {data && data['url'] && (
            <img src={data['url']} />
          )}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t"></footer>
    </div>
  );
}
