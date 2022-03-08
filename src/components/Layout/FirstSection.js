import { chatIcon, personIcon } from '../../svgicons';

const FirstSection = () => {
  return (
    <>
      {' '}
      <div className='flex '>
        <div
          className='fixed  mt-32 w-10 text-right text-sm  font-medium text-gray-800'
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          Keep your friends close, and your moisturizer closer.
        </div>
        <div>
          <div className='md:relative lg:relative  ml-10'>
            <div className=' relative h-72 bg-gradient-to-r from-yellow-200 to-pink-200  '>
              <p className='absolute   ml-64 mt-10 text-xs text-gray-600 font-semibold tracking-widest'>
                ENJOY FREE GROUND SHIPPING ON ALL ORDERS! PLUS, ORDERS $75+ GET 2-DAY SHIPPING - ON
                US!
              </p>
              <img
                className=' ml-56 mt-20 absolute object-cover'
                style={{ width: '720px', height: '425px' }}
                alt='dropper_bottles'
                src='/images/A-Gloei_HPH-3_1400x950px_720x.jpg'
              />
            </div>
            <img
              className='mr-52 mt-40 absolute inset-y-0 right-0 object-cover w-64 h-64'
              alt='dropper_bottle'
              src='/images/A-Gloei_HPH-4_500px_360x.jpg'
            />
          </div>
          <marquee className='mt-60 text-9xl pb-10 text-gray-800 tracking-wider'>
            Crowning Gloie Crowning Gloie
          </marquee>
          <span className='flex  flex-col items-center text-gray-600 font-medium tracking-widest text-xl pb-14'>
            <p> An antioxidant-rich oil blended</p>
            <p>with skin-smoothing retinol?</p>
            <p>That’s golden.</p>
          </span>
        </div>
        <div className='fixed bottom-0 right-0 flex space-x-4 p-4'>
          <button className='flex justify-center items-center rounded-full w-4 h-4 p-6 bg-pink-600 '>
            <div>{chatIcon}</div>
          </button>
          <button className='flex justify-center items-center rounded-full w-4 h-4 p-6 bg-gray-500 '>
            <div>{personIcon}</div>
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
