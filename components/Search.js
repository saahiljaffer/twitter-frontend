import React from "react";

export default function Search({ setLoading, setData, username, setUsername, data }) {
    return (<div>
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
    </div>)
}
