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
              <svg className="w-8 h-8 text-theme-gray-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
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

      {/* section1 banner */}
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
          <button className='text-theme-aquamarine border-2 px-6 py-4 rounded-md'>Get In Touch</button>
        </div>
      </section>

      {/* section2  about */}
      <section className='py-20'>
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
          <header className='mb-16'>
            <h3 className='text-2xl font-poppins text-theme-gray-light'>
              <span className='text-theme-aquamarine mr-3 text-base'>01.</span><span className='font-bold'>About Me.</span></h3>
          </header>
          <div className='flex flex-wrap items-center'>
            <div className='w-full sm:w-1/2 order-last sm:order-first'>
              <p className='text-theme-gray-deep leading-relaxed mb-3'>
                Lorem ipsum dolor sit amet, elit. Assumenda aut commodi culpa
                debitis dolores ducimus, ea eos inventore.
              </p>
              <p className="text-theme-gray-deep leading-relaxed mb-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus alias at deleniti deserunt dolores dolorum eum incidunt
                minus molestias pariatur possimus praesentium quae, quos soluta
                voluptas! Amet atque, cupiditate dolore eveniet fugit illum in
                nisi quae.
              </p>
              <p className="text-theme-gray-deep leading-relaxed mb-3">
                Lorem, Accusamus alias at
              <a href="" className="text-theme-aquamarine font-medium"
                >deleniti deserunt dolores</a
                >
              dolorum eum incidunt minus molestias
              <a href="" className="text-theme-aquamarine font-medium"
                >pariatur possimus praesentium quae</a
                >, quos soluta voluptas! Amet atque
              </p>
              <p className="text-theme-gray-deep leading-relaxed mb-3">
                Assumenda aut commodi culpa debitis dolores ducimus, ea eos
                inventore.
              </p>
              <div className='text-theme-gray-deep flex flex-wrap'>
                <p className="w-1/2 sm:w-2/5">
                  <span className="font-black text-theme-aquamarine text-xs mr-3"
                  >&gt;</span
                  >JavaScript
                </p>
                <p className="w-1/2 sm:w-2/5">
                  <span className="font-black text-theme-aquamarine text-xs mr-3"
                  >&gt;</span
                  >Tailwind CSS
              </p>
                <p className="w-1/2 sm:w-2/5">
                  <span className="font-black text-theme-aquamarine text-xs mr-3"
                  >&gt;</span
                  >Python
              </p>
                <p className="w-1/2 sm:w-2/5">
                  <span className="font-black text-theme-aquamarine text-xs mr-3"
                  >&gt;</span
                  >Django
              </p>
                <p className="w-1/2 sm:w-2/5">
                  <span className="font-black text-theme-aquamarine text-xs mr-3"
                  >&gt;</span
                  >PHP
              </p>
                <p className="w-1/2 sm:w-2/5">
                  <span className="font-black text-theme-aquamarine text-xs mr-3"
                  >&gt;</span
                  >Java
              </p>
                <p className="w-1/2 sm:w-2/5">
                  <span className="font-black text-theme-aquamarine text-xs mr-3"
                  >&gt;</span
                  >Laravel
              </p>
              </div>
            </div>
            {/* picture */}
            <div className='w-full sm:w-1/2 flex items-center justify-center mb-6 sm:mb-0'>
              <div className='flex justify-center w-1/2 '>
                <div className='border-2 border-theme-aquamarine rounded'>
                  <img className='-mt-6 -ml-6 mb-6 mr-6 w-full h-auto' src='https://images.unsplash.com/photo-1564931768869-c66430fe1162?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where I've Worked */}
      <section className='py-20'>
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
          <div className='flex justify-center'>
            <div className='w-full sm:w-2/3'>
              <header>
                <h3 className='text-2xl font-poppins text-theme-gray-light'>
                  <span className='text-base mr-3 text-theme-aquamarine'>02.</span>
                  <span className='font-bold'>Where I have Worked</span>
                </h3>
              </header>

              <div classname="flex flex-wrap">
                <div className='w-full sm:w-1/6 mb-4 sm:mb-0'>
                  <div className='flex flex-row sm:flex-col overflow-x-auto'>
                    <a
                      href="#"
                      className="{' border-theme-aquamarine text-theme-aquamarine ' : currentExperience === 'google'}"
                      className="border-gray-600 text-theme-gray-dark text-theme-gray-deep px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 text-xs hover:bg-theme-gray-light hover:bg-opacity-25"
                    >Google</a>
                    <a
                      href="#"
                      className="{' border-theme-aquamarine text-theme-aquamarine ' : currentExperience === 'microsoft'}"
                      className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-gray-600 text-xs hover:bg-theme-gray-light hover:bg-opacity-25 text-theme-gray-deep"
                    >Microsoft</a>
                    <a
                      href="#"
                      className="{' border-theme-aquamarine text-theme-aquamarine ' : currentExperience === 'safaricom'}"
                      className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-gray-600 text-xs hover:bg-theme-gray-light hover:bg-opacity-25 text-theme-gray-deep"
                    >Safaricom</a>
                    <a
                      href="#"
                      className="{' border-theme-aquamarine text-theme-aquamarine ' : currentExperience === 'apple'}"
                      className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-gray-600 text-xs hover:bg-theme-gray-light hover:bg-opacity-25 text-theme-gray-deep"
                    >Apple</a>
                    <a
                      href="#"
                      className="{' border-theme-aquamarine text-theme-aquamarine ' : currentExperience === 'facebook'}"
                      className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-gray-600 text-xs hover:bg-theme-gray-light hover:bg-opacity-25 text-theme-gray-deep"
                    >Facebook</a>
                    <a
                      href="#"
                      className="{' border-theme-aquamarine text-theme-aquamarine ' : currentExperience === 'twitter'}"
                      className="px-4 py-3 border-b-4 sm:border-b-0 border-l-0 sm:border-l-2 border-gray-600 text-xs hover:bg-theme-gray-light hover:bg-opacity-25 text-theme-gray-deep"
                    >Twitter</a>
                  </div>
                </div>
                <div>
                  <div>
                    {/* Experience items Start */}
                    <div x-show="currentExperience === 'google'">
                      <header>
                        <h3 className='text-xl font-poppins text-theme-gray-light font-bold mb-1'>
                          Software Engineer<span
                            className="text-theme-aquamarine mx-3"
                          >@</span
                          ><a
                            href="#"
                            className="text-theme-aquamarine hover:underline"
                          >Google</a>
                        </h3>
                        <p className="text-theme-gray-deep mb-3 text-xs">
                          Mar 2012 - Jun 2014
                      </p>
                      </header>
                      <div>
                        <p className="text-theme-gray-deep leading-relaxed mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusamus alias at deleniti deserunt dolores
                          dolorum.
                      </p>
                        <p className="text-theme-gray-deep leading-relaxed mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusamus alias at deleniti deserunt dolores
                          dolorum.
                      </p>
                        <p className="text-theme-gray-deep leading-relaxed mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusamus alias at deleniti deserunt dolores
                          dolorum.
                      </p>
                        <p className="text-theme-gray-deep leading-relaxed mb-3">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Accusamus alias at deleniti deserunt dolores
                          dolorum.
                      </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03.something I've built. */}
      <section className='py-20'>
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
          <header className='mb-16'>
            <h3
              className="text-3xl font-poppins text-theme-gray-light font-extrabold"
            >
              <span className="text-theme-aquamarine text-base mr-3">03.</span
              ><span className="font-bold"></span>Some Things I've Built
          </h3>
          </header>

          {/* Start Experience Item */}
          <div className='flex flex-wrap items-center mb-6 sm:mb-32'>
            <div className='w-full sm:w-3/5 mb-4 sm:mb-0'>
              <img src="https://images.unsplash.com/photo-1517819655378-25fe37197692?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2553&q=80" className="rounded shadow" />
            </div>
            <div className='w-full sm:w-2/5'>
              <div className='text-right mb-4'>
                <p className='text-sm text-theme-aquamarine font-poppins'>
                  Featured Project
                </p>
                <h4 className='text-theme-gray-light text-2xl font-poppins font-extrabold'>
                  Tailwind portfolio
                </h4>
              </div>

              <div className='bg-theme-blue-base roundedp p-6 shadow-xl ml-0 sm:-ml-16 mb-6'>
                <p className='text-theme-gray-deep leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis eum nulla possimus velit voluptates? Accusantium animi
                  dolorem est quia tempora?
                </p>
              </div>
              <div className="text-right">
                <div className="flex justify-end mb-6">
                  <span className="text-theme-gray-deep text-xs mr-2">Alpine.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind CSS</span>
                  <span className="text-theme-gray-deep text-xs mr-2">Node.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind UI</span>
                </div>
                <div className="flex justify-end">
                  <a
                    href="#"
                    target="_blank"
                    className="text-theme-gray-light hover:text-theme-aquamarine text-xs mr-2 h-6 w-6"
                  >
                    <svg
                      stroke="none"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 438.549 438.549"
                    >
                      <title>GitHub</title>
                      <path
                        d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-theme-gray-light hover:text-theme-aquamarine text-xs h-6 w-6"
                  >
                    <svg
                      stroke="none"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 194.818 194.818"
                    >
                      <title>External</title>
                      <g>
                        <path
                          d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
                        ></path>
                        <path
                          d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Start Experience Item--> */}
          <div className="flex flex-wrap items-center mb-6 sm:mb-32">
            <div className="w-full sm:w-2/5 z-10">
              <div className="text-left mb-4">
                <p className="text-theme-aquamarine text-sm font-poppins">
                  Featured Project
              </p>
                <h4
                  className="text-theme-gray-light text-2xl font-poppins font-extrabold"
                >
                  Laravel Ecommerce Store
              </h4>
              </div>
              <div
                className="bg-theme-blue-base rounded p-6 shadow-xl mr-0 sm:-mr-16 mb-6"
              >
                <p className="text-theme-gray-deep leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis eum nulla possimus velit voluptates? Accusantium animi
                  dolorem est quia tempora?
              </p>
              </div>
              <div className="text-left">
                <div className="flex justify-start mb-6">
                  <span className="text-theme-gray-deep text-xs mr-2">Alpine.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind CSS</span
                  >
                  <span className="text-theme-gray-deep text-xs mr-2">Node.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind UI</span
                  >
                </div>
                <div className="flex justify-start">
                  <a
                    href="#"
                    target="_blank"
                    className="text-theme-gray-light hover:text-theme-aquamarine text-xs mr-2 h-6 w-6"
                  >
                    <svg
                      stroke="none"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 438.549 438.549"
                    >
                      <title>GitHub</title>
                      <path
                        d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-theme-gray-light hover:text-theme-aquamarine text-xs h-6 w-6"
                  >
                    <svg
                      stroke="none"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 194.818 194.818"
                    >
                      <title>External</title>
                      <g>
                        <path
                          d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
                        ></path>
                        <path
                          d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-3/5 mb-4 sm:mb-0 order-first sm:order-last">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2426&q=80" className="rounded shadow" />
            </div>
          </div>
          {/* <!--#End Experience Item--> */}

          <div className="flex flex-wrap items-center">
            <div className="w-full sm:w-3/5 mb-4 sm:mb-0">
              <img src="https://images.unsplash.com/photo-1501159873713-dc65286617cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" className="rounded shadow" />
            </div>
            <div className="w-full sm:w-2/5">
              <div className="text-right mb-4">
                <p className="text-theme-aquamarine text-sm font-poppins">
                  Featured Project
              </p>
                <h4
                  className="text-theme-gray-light text-2xl font-poppins font-extrabold"
                >
                  Uber Django Clone
              </h4>
              </div>
              <div
                className="bg-theme-blue-base rounded p-6 shadow-xl ml-0 sm:-ml-16 mb-6"
              >
                <p className="text-theme-gray-deep leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Corporis eum nulla possimus velit voluptates? Accusantium animi
                  dolorem est quia tempora?
              </p>
              </div>
              <div className="text-right">
                <div className="flex justify-end mb-6">
                  <span className="text-theme-gray-deep text-xs mr-2">Alpine.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind CSS</span
                  >
                  <span className="text-theme-gray-deep text-xs mr-2">Node.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind UI</span
                  >
                </div>
                <div className="flex justify-end">
                  <a
                    href="#"
                    target="_blank"
                    className="text-theme-gray-light hover:text-theme-aquamarine text-xs mr-2 h-6 w-6"
                  >
                    <svg
                      stroke="none"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 438.549 438.549"
                    >
                      <title>GitHub</title>
                      <path
                        d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="text-theme-gray-light hover:text-theme-aquamarine text-xs h-6 w-6"
                  >
                    <svg
                      stroke="none"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 194.818 194.818"
                    >
                      <title>External</title>
                      <g>
                        <path
                          d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
                        ></path>
                        <path
                          d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                        ></path>
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>




        </div>


      </section>

      {/* project section */}

      <section className='py-20'>
        <div className='max-w-5xl mx-auto px-6 lg:px-0'>
          <header className='text-center mb-16'>
            <h3 className='text-3xl font-poppins text-theme-gray-light font-extrabold'>
              Other Noteworthy Projects
            </h3>
          </header>
          <div className='flex flex-wrap mb-20'>
            {/* card-item-1 start */}
            <div className='p-2 w-full md:w-1/2 lg:w-1/3'>
              <div className='bg-theme-blue-base rounded shadow-lg p-6'>
                <div className='flex justify-between items-center mb-6'>
                  <span className='text-theme-aquamarine h-10 w-10'>
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 60 60"
                    ><title>Folder</title>
                      <path
                        d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      target="_blank"
                      className="text-theme-gray-light hover:text-theme-aquamarine text-xs mr-2 h-6 w-6"
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 438.549 438.549"
                      >
                        <title>GitHub</title>
                        <path
                          d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-theme-gray-light hover:text-theme-aquamarine text-xs h-6 w-6"
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 194.818 194.818"
                      >
                        <title>External</title>
                        <g>
                          <path
                            d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
                          ></path>
                          <path
                            d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className='mb-12'>
                  <h4 className='text-theme-gray-light text-xl font-poppins mb-3 font-bold'>
                    Airbnb.com Clone
                  </h4>
                  <p className="text-theme-gray-deep text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem fugit, ipsa sunt tempora unde vitae!
                </p>
                </div>
                <div className="flex justify-start">
                  <span className="text-theme-gray-deep text-xs mr-2">Vue.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind CSS</span
                  >
                  <span className="text-theme-gray-deep text-xs mr-2">Node.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind UI</span>
                </div>
              </div>
            </div>

            {/* card-item-2 start */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-theme-blue-base rounded shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-theme-aquamarine h-10 w-10">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 60 60"
                    >
                      <title>Folder</title>
                      <path
                        d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      target="_blank"
                      className="text-theme-gray-light hover:text-theme-aquamarine text-xs mr-2 h-6 w-6"
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 438.549 438.549"
                      >
                        <title>GitHub</title>
                        <path
                          d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-theme-gray-light hover:text-theme-aquamarine text-xs h-6 w-6"
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 194.818 194.818"
                      >
                        <title>External</title>
                        <g>
                          <path
                            d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
                          ></path>
                          <path
                            d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mb-12">
                  <h4
                    className="text-theme-gray-light text-xl font-poppins font-extrabold mb-3"
                  >
                    Django portfolio
                </h4>
                  <p className="text-theme-gray-deep text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem fugit, ipsa sunt tempora unde vitae!
                </p>
                </div>
                <div className="flex justify-start">
                  <span className="text-theme-gray-deep text-xs mr-2">Vue.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind CSS</span
                  >
                  <span className="text-theme-gray-deep text-xs mr-2">Node.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind UI</span
                  >
                </div>
              </div>
            </div>

            {/* card-item-3 start */}
            <div className="p-2 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-theme-blue-base rounded shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-theme-aquamarine h-10 w-10">
                    <svg
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      viewBox="0 0 60 60"
                    >
                      <title>Folder</title>
                      <path
                        d="M57.49,21.5H54v-6.268c0-1.507-1.226-2.732-2.732-2.732H26.515l-5-7H2.732C1.226,5.5,0,6.726,0,8.232v43.687l0.006,0 c-0.005,0.563,0.17,1.114,0.522,1.575C1.018,54.134,1.76,54.5,2.565,54.5h44.759c1.156,0,2.174-0.779,2.45-1.813L60,24.649v-0.177 C60,22.75,58.944,21.5,57.49,21.5z M2,8.232C2,7.828,2.329,7.5,2.732,7.5h17.753l5,7h25.782c0.404,0,0.732,0.328,0.732,0.732V21.5 H12.731c-0.144,0-0.287,0.012-0.426,0.036c-0.973,0.163-1.782,0.873-2.023,1.776L2,45.899V8.232z M47.869,52.083 c-0.066,0.245-0.291,0.417-0.545,0.417H2.565c-0.243,0-0.385-0.139-0.448-0.222c-0.063-0.082-0.16-0.256-0.123-0.408l10.191-27.953 c0.066-0.245,0.291-0.417,0.545-0.417H54h3.49c0.38,0,0.477,0.546,0.502,0.819L47.869,52.083z"
                      ></path>
                    </svg>
                  </span>
                  <div className="flex justify-end">
                    <a
                      href="#"
                      target="_blank"
                      className="text-theme-gray-light hover:text-theme-aquamarine text-xs mr-2 h-6 w-6"
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 438.549 438.549"
                      >
                        <title>GitHub</title>
                        <path
                          d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-theme-gray-light hover:text-theme-aquamarine text-xs h-6 w-6"
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        role="img"
                        viewBox="0 0 194.818 194.818"
                      >
                        <title>External</title>
                        <g>
                          <path
                            d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
                          ></path>
                          <path
                            d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
                          ></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mb-12">
                  <h4
                    className="text-theme-gray-light text-xl font-poppins font-extrabold mb-3"
                  >
                    Youtube Clone
                </h4>
                  <p className="text-theme-gray-deep text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Exercitationem fugit, ipsa sunt tempora unde vitae!
                </p>
                </div>
                <div className="flex justify-start">
                  <span className="text-theme-gray-deep text-xs mr-2">Vue.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind CSS</span
                  >
                  <span className="text-theme-gray-deep text-xs mr-2">Node.js</span>
                  <span className="text-theme-gray-deep text-xs mr-2"
                  >Tailwind UI</span
                  >
                </div>
              </div>
            </div>

          </div>

          <div className="text-center">
            <a
              href="#"
              className="inline-block text-theme-aquamarine px-6 py-4 border border-theme-aquamarine rounded"
            >More projects</a>
          </div>
        </div>
      </section>

      {/* contact */}
      <section className="py-64">
        <div className="max-w-5xl mx-auto px-6 lg:px-0">
          <header className="mb-16 text-center">
            <h4 className="text-theme-aquamarine text-base mb-3">What's Next?</h4>
            <h3
              className="text-5xl font-poppins text-theme-gray-light font-extrabold"
            >
              Get In Touch
          </h3>
          </header>
          <div className="flex justify-center mb-20">
            <div className="w-full sm:w-2/3 text-center">
              <p className="text-theme-gray-deep">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                architecto corporis dolor doloremque ducimus eaque, earum fuga
                illum ipsam iusto libero magnam, molestiae non nulla numquam
                provident quas sapiente sit temporibus vel voluptate voluptatem.
            </p>
            </div>
          </div>
          <div className="text-center">
            <a
              href="#"
              className="inline-block text-theme-aquamarine px-6 py-4 border border-theme-aquamarine rounded"
            >Say Hello</a>
          </div>
        </div>
      </section>
      <footer className='py-8'>
        <div className="max-w-5xl mx-auto px-6 lg:px-0">
          <div className="w-full text-center">
            <a
              href="#"
              className="text-xs text-theme-gray-deep hover:text-theme-aquamarine"
            >
              Designed and Built by Rai Omido,Thank You!
          </a>
          </div>
        </div>
      </footer>
    </div >
  );
}
