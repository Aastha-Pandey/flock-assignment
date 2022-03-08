const FirstSection = () => {
  return (
    <>
      <div>
        <div className='relative  md:ml-10 lg:ml-10'>
          <div className='relative h-72 w-full bg-gradient-to-r from-yellow-200 to-pink-200  '>
            <p className='text-xs absolute md:ml-64 lg:ml-64 mt-10 text-gray-600 font-medium md:font-semibold lg:font-semibold tracking-widest'>
              ENJOY FREE GROUND SHIPPING ON ALL ORDERS! PLUS, ORDERS $75+ GET 2-DAY SHIPPING - ON
              US!
            </p>
            <img
              className='w-80 mt-36 md:w-[45rem] lg:w-[45rem] md:h-[27rem] lg:h-[27rem] md:ml-56 lg:ml:56 md:mt-20 lg:mt-20 absolute object-cover'
              alt='dropper_bottles'
              src='/images/A-Gloei_HPH-3_1400x950px_720x.jpg'
            />
          </div>
          <img
            className='w-32 h-32 mt-48 md:mr-52 md:mt-40 lg:mr-52 lg:mt-40 absolute inset-y-0 right-0 object-cover md:w-64 md:h-64  lg:w-64 lg:h-64'
            alt='dropper_bottle'
            src='/images/A-Gloei_HPH-4_500px_360x.jpg'
          />
        </div>
        <marquee className='mt-60 text-5xl md:text-9xl lg:text-9xl text-gray-800 tracking-wider'>
          Crowning Gloie Crowning Gloie
        </marquee>
        <span className='flex  flex-col items-center text-gray-600 font-medium tracking-widest text-xl pb-14'>
          <p> An antioxidant-rich oil blended</p>
          <p>with skin-smoothing retinol?</p>
          <p>That’s golden.</p>
          <input
            autoFocus
            placeholder='Shop'
            className='text-right w-16 caret-gray-700 focus:outline-none hover:border-b-2 hover:border-gray-600 placeholder:text-2xl placeholder:tracking-wider py-2 placeholder:text-gray-600 font-semibold'
          ></input>
        </span>
      </div>
    </>
  );
};

export default FirstSection;
