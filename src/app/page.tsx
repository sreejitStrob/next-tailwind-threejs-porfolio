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
      <section className='md:mt-5 md:container mx-auto'>
        <div className='blog-summary'>
          <h2 className='text-3xl font-bold md:text-3xl md:font-bold 2xl:text-4xl 2xl:leading-10 2xl:font-bold'>Recent <span className='bg-gradient-to-br from-red-500 to-yellow-100 bg-clip-text text-transparent'>Posts</span></h2>
        </div>
        <div className='mt-5 ring-1 hover:translate-y-1'>
          <div className="flex flex-col items-center gap-x-8 rounded-md bg-[#00303d] p-3 md:flex-row md:bg-[#00303d]">
            <div className="shrink-0"><a href="/demo/astro-boilerplate">
              <img className="h-36 w-36 hover:translate-y-1 rounded-lg" src="/images/php.png" alt="Project Web Design" loading="lazy" />
            </a></div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                  <div className="text-xl font-semibold mt-1">PHP in 2023</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Web design</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript</div>
                </div></div><p className="mt-3 text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                  hendrerit dui odio id enim.</p>
            </div>
          </div>
        </div>
        <div className='mt-5 ring-1 hover:translate-y-1'>
          <div className="flex flex-col items-center gap-x-8 rounded-md bg-[#00303d] p-3 md:flex-row">
            <div className="shrink-0"><a href="/demo/astro-boilerplate">
              <img className="h-36 w-36 hover:translate-y-1 rounded-lg" src="/images/php.png" alt="Project Web Design" loading="lazy" />
            </a></div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                  <div className="text-xl font-semibold mt-1">PHP in 2023</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Web design</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript</div>
                </div></div><p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                  hendrerit dui odio id enim.</p>
            </div>
          </div>
        </div>
        <div className='mt-5 ring-1 hover:translate-y-1'>
          <div className="flex flex-col items-center gap-x-8 rounded-md bg-[#00303d] p-3 md:flex-row">
            <div className="shrink-0"><a href="/demo/astro-boilerplate">
              <img className="h-36 w-36 hover:translate-y-1 rounded-lg" src="/images/php.png" alt="Project Web Design" loading="lazy" />
            </a></div>
            <div>
              <div className="flex flex-col items-center gap-y-2 md:flex-row">
                <a className="hover:text-cyan-400" href="/demo/astro-boilerplate">
                  <div className="text-xl font-semibold mt-1">PHP in 2023</div>
                </a>
                <div className="ml-3 flex gap-2">
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-fuchsia-400 text-fuchsia-900">Astro.js</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-lime-400 text-lime-900">Web design</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-sky-400 text-sky-900">Tailwind.css</div>
                  <div className="rounded-md px-2 py-1 text-xs font-semibold bg-rose-400 text-rose-900">TypeScript</div>
                </div></div><p className="mt-3 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  bibendum. Nunc non posuere consectetur, justo erat semper enim, non
                  hendrerit dui odio id enim.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-3 md:mt-14 md:container mx-auto'>
        <div className='flex flex-row justify-between items-center'>
          <div className='blog-projects'>
            <h2 className='text-3xl font-bold md:text-3xl md:font-bold 2xl:text-4xl 2xl:leading-10 2xl:font-bold'>Recent <span className='bg-gradient-to-br from-red-500 to-yellow-100 bg-clip-text text-transparent'>Projects</span> </h2>
          </div>
          <div className='view-all-post'>
            <span className='hover:text-blue-200 hover:cursor-pointer'>View all post →</span>
          </div>
        </div>

        <div className='flex flex-col gap-5 md:flex md:flex-row md:mt-3 hover:cursor-pointer  md:justify-between'>
          <div className="md:max-w-lg w-full hover:translate-y-2 ring-1 rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-[#006581] to-[#00303d]">
            <img className="w-full" src="/images/php.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
          <div className="md:max-w-lg w-full hover:translate-y-2 ring-1 rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-[#006581] to-[#00303d]">
            <img className="w-full" src="/images/php.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
          <div className="md:max-w-lg w-full hover:translate-y-2 ring-1 rounded-lg overflow-hidden shadow-lg bg-gradient-to-b from-[#006581] to-[#00303d]">
            <img className="w-full" src="/images/php.png" alt="Sunset in the mountains" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-100 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>

      </section>


    </main>
  )
}
