import 'tailwindcss/tailwind.css'
import SideNav from '../components/sidenav'
import { app } from '../lib/firebase'

function MyApp({ Component, pageProps }) {
  return (
    <div className='flex'>
      <SideNav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
