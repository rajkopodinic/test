import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';

// Import Firestore and declare database
//import { firebaseConf } from '../../utils/firebase';
import { collection, getDocs, getDoc, updateDoc, doc, getFirestore } from "firebase/firestore";
const database = getFirestore()
const channelsRef = collection(database, 'channels')

export default function Dashboard({ channelDetail }) {

    console.log(channelDetail)

    function updateChannel() {
        useEffect(() => {
            var updateChannelForm = document.querySelector("#updateChannelForm")
            updateChannelForm.addEventListener('submit', (e) => {
                const id = channelDetail.firebaseId

                var streamID = document.querySelector('#stream-id')
                var streamName = document.querySelector('#stream-name')
                var streamURL = document.querySelector('#stream-URL')

                const docRef = doc(database, "channels", id);

                if (streamID.value) {
                    updateDoc(docRef, {
                        id: streamID.value
                    })
                }

                if (streamName.value) {
                    updateDoc(docRef, {
                        name: streamName.value
                    })
                }

                if (streamURL.value) {
                    updateDoc(docRef, {
                        streamURL: streamURL.value
                    })
                }
            })
        }, [])
    }

    //Update Stream ID
    function updateStreamId() {
        useEffect(() => {
            var updateStreamIdForm = document.querySelector("#streamId")
            updateStreamIdForm.addEventListener('submit', (e) => {
                var streamIdInput = document.querySelector('#streamIdInput')

                const id = channelDetail.firebaseId

                const docRef = doc(database, "channels", id);
                updateDoc(docRef, {
                    id: streamIdInput.value
                })
            })
        }, [])
    }

    //Update Stream Name
    function updateStreamName() {
        useEffect(() => {
            var updateStreamNameForm = document.querySelector("#streamName")
            updateStreamNameForm.addEventListener('submit', (e) => {
                var streamNameInput = document.querySelector('#streamNameInput')

                const id = channelDetail.firebaseId

                const docRef = doc(database, "channels", id);
                updateDoc(docRef, {
                    name: streamNameInput.value
                })
            })
        }, [])
    }

    //Update Stream URL
    function updateStreamURL() {
        useEffect(() => {
            var updateStreamURLForm = document.querySelector("#streamURL")
            updateStreamURLForm.addEventListener('submit', (e) => {
                var streamURLInput = document.querySelector('#streamURLInput')

                const id = channelDetail.firebaseId

                const docRef = doc(database, "channels", id);
                updateDoc(docRef, {
                    streamURL: streamURLInput.value
                })
            })
        }, [])
    }

    return (
        <div className="flex flex-col bg-gray-50 min-h-screen p-10 text-gray-900">
            <Head>
                <title>{channelDetail.name}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1 className='text-3xl font-bold'>{channelDetail.name}</h1>

            <br />

            <form id="updateChannelForm" action="#" method="POST">
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
                                    Stream ID: {channelDetail.id}
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm p-2 bg-gray-100">
                                    <input
                                        type="text"
                                        name="stream-id"
                                        id="stream-id"
                                        className="p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder={channelDetail.id}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Stream Name: {channelDetail.name}
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm p-2 bg-gray-100">
                                    <input
                                        type="text"
                                        name="stream-name"
                                        id="stream-name"
                                        className="p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder={channelDetail.name}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                                    Stream URL: {channelDetail.streamURL}
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm p-2 bg-gray-100">
                                    <input
                                        type="text"
                                        name="stream-URL"
                                        id="stream-URL"
                                        className="p-2 bg-gray-100 focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                                        placeholder={channelDetail.streamURL}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={updateChannel()}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export const getStaticPaths = async () => {
    var channels = [];

    const querySnapshot = await getDocs(collection(database, "streams"));
    querySnapshot.forEach((doc) => {
        channels.push({ "firebaseId": doc.id, "channelData": doc.data() });
    });

    const paths = channels.map(channel => {
        return {
            params: { id: channel.firebaseId.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    var channelDetail = {};

    const id = context.params.id

    const docRef = doc(database, "streams", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        channelDetail = docSnap.data()
        channelDetail.firebaseId = id
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    return { props: { channelDetail } }
}