import React from 'react';

export default function DashboardPage() {
    return(
        <body className='bg-gray-800 text-gray-500 min-h-screen'>
            <header className='sticky py-5 bg-gray-950'>
                <nav className='w-11/12 flex flex-row m-auto'>
                    <div className='uppercase text-lg basis-1/4 text-center'>
                        <a href="https://www.youtube.com/watch?v=73f7k5XBUtA">
                                <span className='font-extrabold'>Atri</span>
                                <span className='font-extralight'> Ariska </span>
                                <span className='font-extrabold'>Alfa</span>
                        </a>
                    </div>
                    <div className='basis-1/2 flex justify-evenly items-center'>
                        <a href=''><span>Service</span></a>
                        <a href=''><span>Portfolio</span></a>
                        <a href=''><span>Experience</span></a>
                        <a href=''><span>Contact</span></a>
                    </div>
                    <div className='basis-1/4'></div>
                </nav>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </body>
    )
}