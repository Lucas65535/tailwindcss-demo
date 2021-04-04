import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className='bg-theme-blue-deep'>
      <Head>
        <title>Demo10-portfolio</title>
        <link rel="icon" href="/favicon.ico" />

        <meta charset="utf-8" />
        <meta name="author" content="Rai Omido" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1" />
        <meta name="description" content="Commerce stores" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/public/images/logo.png" />
        <meta property="og:title" content="" />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="" />
        <meta name="og:description" content="" />

        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0a192f" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Poppins:wght@600&display=swap" rel="stylesheet" />

      </Head>

      <header className='font-poppins'>
        <div className="max-w-screen-xl mx-auto" x-data="{mobileMenuOpen: false}">
          <div className="flex items-center justify-between pt-5 pb-6 px-5">
            <div>
              <svg class="w-8 h-8 text-theme-gray-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-theme-aquamarine focus:outline-none transition duration-150 ease-in-out">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="flex text-sm items-center hidden md:block">
              <a href="#about" className="text-theme-gray-light hover:text-theme-aquamarine mr-4"><span className="text-theme-aquamarine mr-2">01.</span><span>About</span></a>
              <a href="#experience" className="text-theme-gray-light hover:text-theme-aquamarine mr-4"><span className="text-theme-aquamarine mr-2">02.</span><span>Experience</span></a>
              <a href="#work" className="text-theme-gray-light hover:text-theme-aquamarine mr-4"><span className="text-theme-aquamarine mr-2">03.</span><span>Work</span></a>
              <a href="#contact" className="text-theme-gray-light hover:text-theme-aquamarine mr-4"><span className="text-theme-aquamarine mr-2">04.</span><span>Contact</span></a>
              <a href="#contact" className="text-theme-aquamarine px-4 py-2 border border-theme-aquamarine rounded">Resume</a>
            </div>
            <div x-show="mobileMenuOpen" className="absolute z-20 top-0 inset-x-0 transition transform origin-top-right md:hidden">
              <div className="rounded-b-lg shadow-lg">
                <div className="shadow-lg bg-theme-blue-base">
                  <div className="pt-5 pb-6 px-5 space-y-6 sm:space-y-8 sm:pb-8">
                    <div className="flex items-center justify-between">
                      <div className='hidden'>
                        <img className="h-10 w-10" src="public/images/portfolio-logo.png" />
                      </div>
                      <div className="-mr-2">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-theme-gray-deep hover:text-theme-aquamarine hover:bg-theme-blue-base focus:outline-none focus:bg-theme-blue-base focus:text-theme-aquamarine transition duration-150 ease-in-out">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <nav className="space-y-8">
                        <div className="grid gap-7 sm:grid-cols-2 sm:row-gap-8 sm:col-gap-4">
                          <a href="#about" className="text-theme-gray-light hover:text-theme-aquamarine"><span className="text-theme-aquamarine mr-2">01.</span><span>About</span></a>
                          <a href="#experience" className="text-theme-gray-light hover:text-theme-aquamarine"><span className="text-theme-aquamarine mr-2">02.</span><span>Experience</span></a>
                          <a href="#work" className="text-theme-gray-light hover:text-theme-aquamarine"><span className="text-theme-aquamarine mr-2">03.</span><span>Work</span></a>
                          <a href="#contact" className="text-theme-gray-light hover:text-theme-aquamarine"><span className="text-theme-aquamarine mr-2">04.</span><span>Contact</span></a>
                          <a href="#contact" className="text-theme-aquamarine px-4 py-2 border border-theme-aquamarine rounded">Resume</a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </header>

      {/* section1 */}
      <section className='py-20'>
        <div className='max-w-5xl mx-auto'>
          <h4 className='text-theme-aquamarine mb-3'>Hi, My name is</h4>
          <h1 className='text-theme-gray-light font-poppins mb-3 text-2xl sm:text-6xl font-black'>You kou Coding</h1>
          <h1 className='text-theme-gray-deep font-poppins mb-8 text-2xl sm:text-6xl font-black'>I build things for web.</h1>
          <div className='w-full mb-12 sm:w-1/2'>
            <p className='text-theme-gray-deep leading-relax'>
              Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa debitis dolores ducimus, ea eos inventore nostrum officia provident voluptatem voluptates. Deleniti, error.
		      	</p>
          </div>
          <button className='text-theme-aquamarine border border-2 px-6 py-4 rounded-md'>Get In Touch</button>
        </div>
      </section>

      <footer classNameName={styles.footer}>
      </footer>
    </div >
  );
}
