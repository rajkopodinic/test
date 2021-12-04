import Head from 'next/head'
import Link from 'next/link'

// import { app } from '../../lib/firebase';
import { onSnapshot, getDocs, query, orderBy, where } from "@firebase/firestore";
import { collectionRefStreams } from '../../lib/firebase';

// Nextjs Example
export async function getServerSideProps() {
    var streams = [];

    const q = query(collectionRefStreams, orderBy("id"));
    const res = await getDocs(q)
    res.forEach((doc) => {
        streams.push({"firebaseId": doc.id, "data": doc.data()})
    })

    return { props: { streams } }
}

export default function Streams({ streams }) {
    console.log('props', streams)

    return (
        <div className="flex flex-col min-h-screen p-10 bg-gray-200 w-4/5 text-gray-900">
            <Head>
                <title>Live TV - Streamss</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className='flex w-full justify-between items-center'>
                <h1 className='text-3xl font-bold'>Streams</h1>
                <Link href='streams/new-stream'>
                    <div className='flex px-4 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-700 h-full justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <button className='pl-2 text-xl font-bold'>NEW</button>
                    </div>
                </Link>
            </div>

            <br />
            <br />

            <div className="flex flex-col -mt-2">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            URL
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            ID
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {streams.map((stream) => (
                                        <tr key={stream.firebaseId}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{stream.data.name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{stream.data.url}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{stream.data.id}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-blue-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export async function getStaticProps() {
//     var streams = [];

//     const querySnapshot = await getDocs(collectionRefStreams);
//     querySnapshot.forEach((doc) => {
//       streams.push({"firebaseId": doc.id, "data": doc.data()});
//     });

//     return { props: { streams } }
//   }

// export async function getSerrverSideProps() {
//     onSnapshot((collectionRefStreams), (snapshot) => {
//         var streams = [];
//         snapshot.docs.forEach((doc) => {
//             streams.push({ ...doc.data(), firebaseId: doc.id })
//         })
//         console.log('firebase init', streams)
//         //return streams;
//     })

//     return { props: { streams } }
// }
