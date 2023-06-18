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
      <body className={[inter.className, 'bg-image', 'text-gray-50','min-h-screen'].join(' ')}>
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
      </body>
    </html>
  )
}
