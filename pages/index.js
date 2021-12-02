import Head from "next/head";
import { useState } from "react";
import Image from 'next/image'
import Table from "../components/Table"
import Search from "../components/Search";
import React from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col bg-gray-200 min-h-screen">

      <Head>
        <title>Twitter Statistics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full flex-1 px-20 text-center">
        <Search username={username} setUsername={setUsername} setData={setData} setLoading={setLoading} />
        <div>
          {!loading && data && data['url'] && (
            <div className="flex">
              <div className="w-1/2 m-4">
                <Table tweets={data['bad_tweets']} username={username} />
              </div>
              <div className="items-center justify-center w-1/2 m-4">
                <Image src={data['url']} width="500px" height="300px" />
              </div>
            </div>
          )}
          {loading && (<h1>Loading...</h1>)}
        </div>
      </main>

    </div>
  );
}
