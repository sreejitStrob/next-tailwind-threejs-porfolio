import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Sreejit's Blog",
  description: 'Tech talks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[inter.className, 'bg-gradient-to-b from-gray-900 to-gray-600 ', 'text-gray-50', 'min-h-screen'].join(' ')}>
        <header className='flex flex-col px-3 py-6 gap-2 md:mx-auto md:flex md:flex-row md:justify-between md:min-w-screen md:container '>
          <div className='logo-section mx-auto md:mx-0'>
            <span className='bg-gradient-to-br font-bold from-red-500 to-yellow-100 bg-clip-text text-3xl text-transparent'>Sreejit's blog</span>
          </div>
          <ul className='flex flex-row text-xl gap-5 mx-auto md:mx-0 md:text-2xl'>
            <li>Blogs</li>
            <li>Github</li>
            <li>Twitter</li>
          </ul>
        </header>
        {children}
        <footer className='mt-5 md:mt-14 md:container mx-auto'>
          <div className='flex flex-col items-center justify-between gap-6 md:flex-row'>
            <div className='blog-projects flex flex-col justify-center items-center md:item-start sm:w-7/12'>
              <h2 className='text-3xl font-bold md:text-3xl md:font-bold 2xl:text-4xl 2xl:leading-10 2xl:font-bold'>Subscribe to my <span className='bg-gradient-to-br from-red-500 to-yellow-100 bg-clip-text text-transparent'>Newsletters</span> </h2>
              <span className='text-lg text-gray-300 md:mb-7'>Subscribe to keep up to date</span>
            </div>
            <div className="w-90 mb-3 sm:w-5/12">
              <form className="flex p-1 rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
                <input
                  className="w-full appearance-none 
              bg-slate-800 focus:outline-none"/>
                <button className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50" type="submit">Subscribe</button></form></div>
          </div>

          <div className="p-1 border-t border-white-600 pt-5 mb-10"><div className="text-sm text-gray-200">© Copyright 2023 Built with ♥ by Sreejit &  Snehal</div></div>
        </footer>
      </body>
    </html>
  )
}
