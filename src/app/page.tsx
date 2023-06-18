import Image from 'next/image'

export default function Home() {
  return (
    <main className='px-3 max-w-screen-2xl mx-auto'>
      <section className='md:mt-14 md:container mx-auto'>
        <div className='flex flex-col mt-5 items-center md:flex-row md:justify-between md:items-start  md:gap-x-10'>
          <div>
            <h1 className='text-3xl font-bold md:text-4xl md:font-bold 2xl:text-4xl 2xl:leading-10 2xl:font-bold'>
              Hi there, I'm <span className='bg-gradient-to-br from-red-500 to-yellow-100 bg-clip-text text-transparent'>Sreejit</span>
            </h1>
            <p className='mt-3 text-2xl leading-9 md:mt-5 md:text-2xl md:leading-10 2xl:text-3xl 2xl:leading-10 '>
              Full stack engineer specializing in building web applications and websites using PHP, JavaScript and React.<br />
              I design and code beautifully simple things, and I love what I do.
            </p>
            <div className='mt-6 flex flex-row gap-1'>
              <a href="">
                <img className="h-10 md:h-12  hover:translate-y-1" src="/images/twitter-icon.png" alt="Twitter icon" loading="lazy" />
              </a>
              <a href="">
                <img className="h-10 md:h-12  hover:translate-y-1" src="/images/facebook-icon.png" alt="Facebook icon" loading="lazy" />
              </a>
              <a href="">
                <img className="h-10 md:h-12  hover:translate-y-1" src="/images/linkedin-icon.png" alt="Linkedin icon" loading="lazy" />
              </a>
              <a href="">
                <img className="h-10 md:h-12  hover:translate-y-1" src="/images/youtube-icon.png" alt="Youtube icon" loading="lazy" />
              </a>
            </div>
          </div>
          <div className='mt-5 md:ml-10 '>
            <img
              className='object-contain h-100 w-100'
              src="/images/avatar9.png"
              alt="avatar"
              width={300}
              height={350}
            />
          </div>
        </div>
      </section>
      <section className=''>

      </section>


    </main>
  )
}
