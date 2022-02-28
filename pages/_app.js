import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
  <div> 
    <nav className='border-b p-6'>
    <p className='text-4xl font-bold'> MetaCraft Marketplacce SmartSoft</p>
    <div className='flex mt-5'>
      <Link href='/'>
        <a className='mr-4 text-red-400'>Home</a>
      </Link>
      <Link href='/create-item'>
        <a className="mr-6 text-green-500">Create Item</a>
      </Link>
      <Link href='/my-assets'>
        <a className='mr-8 text-red-400'>Your Purchases</a>
      </Link>
      <Link href='/creater-dashboard'>
        <a className='mr-10 text-red-400'>Your Dassh Baord</a>
      </Link>
    </div>
      <ul>

      </ul>
    </nav>
    <Component {...pageProps} />


    </div>)
 
}

export default MyApp
