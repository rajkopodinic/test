import Link from 'next/link'

export default function SideNav() {
    return (
        <div className='flex flex-col space-y-12 min-h-screen bg-gray-100 w-1/5 p-10 bg-gray-50 text-gray-900'>
            <Link href='/'>
                <h1 className='text-3xl font-bold'>Live TV</h1>
            </Link>

            <div className='flex flex-col h-full justify-between'>
                <Link href='/streams'>
                    <div className='bg-white p-5 rounded-md shadow-md'>
                        <button>Streams</button>
                    </div>
                </Link>
                <div className='flex bg-red-500 hover:bg-red-700 text-white p-4 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <button className='pl-4'>Sign Out</button>
                </div>
            </div>

        </div>
    )
}