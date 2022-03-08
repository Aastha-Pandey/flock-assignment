import { socialMediaIcons, tabs } from '../../svgicons';

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundColor: 'rgb(88,88,88)' }}
        className=' w-full flex flex-col justify-center items-center space-y-20 py-20'
      >
        <img
          className='w-32'
          src='https://cdn.shopify.com/s/files/1/0295/0509/3716/files/full_logomark.svg?v=1595984354'
          alt='Drunk Elephant'
          itemprop='logo'
        />
        <div className='flex flex-col space-y-4 items-center'>
          <p
            style={{ fontSize: '0.7rem' }}
            className='font-medium uppercase tracking-widest  text-gray-400'
          >
            Join our mailing list
          </p>
          <div className='flex items-center'>
            {' '}
            <input
              type='text'
              placeholder='Enter your email'
              className='placeholder:tracking-wider placeholder:text-center placeholder:font-medium placeholder:text-lg py-2 px-36 bg-transparent border-b border-gray-200'
            />
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 text-gray-400 '
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M14 5l7 7m0 0l-7 7m7-7H3' />
            </svg>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-6'>
          <p
            style={{ fontSize: '0.7rem' }}
            className='uppercase font-medium  tracking-wider  text-gray-400'
          >
            WHAT CAN WE HELP YOU FIND?
          </p>
          <div className='flex space-x-4'>
            {tabs.map((tab) => (
              <button className='hover:text-gray-400 uppercase text-xs text-gray-200 font-semibold tracking-wider'>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center space-y-6'>
          <p
            style={{ fontSize: '0.7rem' }}
            className='uppercase font-medium  tracking-wider  text-gray-400'
          >
            connect with us irl
          </p>
          <div className='flex space-x-4'>
            {socialMediaIcons.map((icon) => (
              <button className='hover:text-gray-400 uppercase text-xs text-gray-200 font-semibold tracking-wider'>
                {icon}
              </button>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center space-y-6'>
          <p
            style={{ fontSize: '0.7rem' }}
            className='uppercase font-medium  tracking-wider  text-gray-400'
          >
            &#169;2022 drunk elephant
          </p>
          <div className='flex space-x-4'>
            {['privacy policy', 'terms and conditions'].map((icon) => (
              <button
                style={{ fontSize: '0.7rem' }}
                className='hover:text-gray-400 uppercase  text-gray-200 font-medium tracking-widest'
              >
                {icon}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
