import React from "react"

export default function Table({ tweets, username }) {
    return (
        <div className="flex flex-col">
            <div className="-my-2 sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Potential Tweets
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tweets.map((tweet) => (
                                    <tr key={tweet.id}>
                                        <td className="px-6 py-4">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    <a href={"https://twitter.com/" + username + "/status/" + tweet.id} target="_blank">
                                                        {tweet.text}
                                                    </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
