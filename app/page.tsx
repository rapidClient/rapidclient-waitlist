'use client';
import { useState } from 'react';
import Image from 'next/image';
import Modal from './components/home/modal';
import Waitlist from './components/home/waitlist';

export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <main className='min-h-screen flex flex-col bg-white'>
        <header className='bg-white w-full px-6 sm:px-12 md:px-16 lg:px-32 xl:px-48 py-6 flex justify-between items-center'>
          <div className='flex items-center'>
            <Image
              src='/logo-with-name.png'
              alt='Company Logo'
              width={500}
              height={500}
              className='object-contain w-[150px] h-[60px] md:w-[220px] md:h-[80px]'
            />
          </div>
          <nav className='hidden md:block'>
            <button
              onClick={() => setModalOpen(true)}
              className='text-sm md:text-base rounded-full bg-[#4188D9] text-white px-6 py-3 font-semibold shadow transition-all duration-300 hover:bg-[#3272c0] hover:shadow-lg transform hover:-translate-y-1 cursor-pointer'
            >
              Join Waitlist!
            </button>
          </nav>
        </header>

        <section className='flex items-center justify-center px-6 sm:px-12 md:px-16 lg:px-32 xl:px-48 py-8 md:py-36 flex-grow'>
          <div className='max-w-5xl text-center'>
            <h2 className='text-[#151C24] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6'>
              Scale Smarter, <span className='text-[#4188D9]'>Not Harder</span>
            </h2>
            <p className='text-[#3C4B5C] text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto mb-8'>
              rapidClient is the business engine for scaling startups. Create a
              Client for every workflow, and let it execute decisions, act on
              your behalf, and report back with results. Shift your focus to
              strategising, scaling, and watching growth accelerate.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className='text-lg md:text-xl rounded-full bg-[#4188D9] text-white px-12 py-4 font-semibold shadow transition-all duration-300 hover:bg-[#3272c0] hover:shadow-lg transform hover:-translate-y-1 cursor-pointer'
            >
              Join Waitlist!
            </button>
          </div>
        </section>

        <footer className='bg-white w-full border-t border-[#DCE8F5] pt-4 pb-6 flex justify-center items-center mt-auto'>
          <p className='text-sm md:text-base text-[#3C4B5C]'>
            &copy; {new Date().getFullYear()} rapidClient. All rights reserved.
          </p>
        </footer>
      </main>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <Waitlist />
      </Modal>
    </>
  );
}
