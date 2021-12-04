import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/router'

// import { getChannelsCollection } from '../utils/firebase';
// console.log("test", getChannelsCollection)

// Import Firestore and declare database
//import { db } from '../../lib/firebase';
import { collection, addDoc, getFirestore } from "firebase/firestore";
const channelsDatabase = getFirestore()

export default function NewStream() {

    return (
        <div className="flex flex-col bg-gray-200 min-h-screen w-4/5 p-10 text-gray-900">
            <Head>
                <title>New Stream</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-3xl font-bold'>New Stream</h1>

            <br />
            <br />

            <form id="createChannelForm" action="#" method="POST">
                <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Image</label>
                            <div className="mt-1 flex items-center">
                                <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                                <button
                                    type="button"
                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Change
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Stream ID:
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm p-2 bg-gray-100">
                                    <input
                                        type="number"
                                        name="stream-id"
                                        id="stream-id"
                                        className="p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Stream Name:
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm p-2 bg-gray-100">
                                    <input
                                        type="text"
                                        name="stream-name"
                                        id="stream-name"
                                        className="p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Stream URL:
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm p-2 bg-gray-100">
                                    <input
                                        type="text"
                                        name="stream-url"
                                        id="stream-url"
                                        className="p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={createNewChannel()}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

function createNewChannel() {
    const router = useRouter()
    useEffect(() => {
        var updateChannelForm = document.querySelector("#createChannelForm")
        updateChannelForm.addEventListener('submit', (e) => {
            e.preventDefault();
            //const id = channelDetail.firebaseId

            const channelsDatabase = getFirestore()
            console.log(channelsDatabase);

            var streamID = document.querySelector('#stream-id').value
            var streamName = document.querySelector('#stream-name').value
            var streamURL = document.querySelector('#stream-url').value

            const create = async (e) => {
                // Add a new document with a generated id.
                if (streamID && streamName && streamURL) {
                    const docRef = await addDoc(collection(channelsDatabase, "streams"), {
                        id: parseInt(streamID),
                        name: streamName,
                        url: streamURL
                    });
                    console.log("Document written with ID: ", docRef.id);
                }
                router.push('/streams')
            }
            create();
        })
    }, [])
}