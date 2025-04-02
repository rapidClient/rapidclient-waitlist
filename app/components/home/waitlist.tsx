'use client';
import { useState } from 'react';
import axios from 'axios';

const Waitlist = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      await axios.post('https://vividly-waitlist-api.onrender.com/email', {
        email,
      });

      setIsLoading(false);
      setIsSubmitted(true);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className='bg-white p-8 rounded-3xl'>
      {!isSubmitted ? (
        <div className='space-y-6'>
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>
              Join the Waitlist
            </h2>
            <p className='text-gray-600'>
              Be the first to experience rapidClient&apos;s AI-powered business
              automation.
            </p>
          </div>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700 mb-1'
              >
                Email Address
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='your@email.com'
                className='w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all'
              />
              {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
            </div>

            <button
              type='submit'
              disabled={isLoading}
              className='w-full bg-[#4188D9] text-white font-semibold py-3 px-4 rounded-xl hover:bg-opacity-90 transition-all duration-300 flex justify-center items-center'
            >
              {isLoading ? (
                <span className='inline-block h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2'></span>
              ) : null}
              {isLoading ? 'Submitting...' : 'Join Waitlist'}
            </button>
          </form>

          <p className='text-xs text-gray-500 text-center'>
            By joining, you agree to receive updates from Vividly. We respect
            your privacy and won&apos;t share your information.
          </p>
        </div>
      ) : (
        <div className='text-center py-6 space-y-4'>
          <div className='mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 text-green-600'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <h3 className='text-xl font-bold text-gray-800'>
            You&apos;re on the list!
          </h3>
          <p className='text-gray-600'>Thanks for joining our waitlist.</p>
        </div>
      )}
    </div>
  );
};

export default Waitlist;
