import { useState } from 'react';

const reviews = [
  {
    name: 'Alicia D.',
    review: 'My skin is noticeably firmer, brighter and smoother.',
  },
  {
    name: 'candance Y.',
    review:
      'Since I have been using Drunk Elephant products for over a month now, bare faced selfies have changed in my view.',
  },
  {
    name: 'Amanda B.',
    review:
      'Never did I think I would feel confident and comfortable enough to walk out bare-faced.',
  },
];
const ReviewCarousel = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='flex flex-col items-center space-y-10 py-24 '>
        <h1 className='text-5xl text-gray-600 font-bold tracking-widest '>fall #drunkinlove</h1>
        <img
          className='w-28'
          alt='smiling mouth'
          src='https://cdn.shopify.com/s/files/1/0209/8446/files/LIPS_360x.png?v=1601059598'
        ></img>

        <div className='flex space-x-44'>
          <button
            onClick={() => {
              if (count <= 0) {
                return setCount(reviews.length - 1);
              }
              setCount(count - 1);
            }}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              role='presentation'
              class='icon icon--wide icon-arrow w-28'
              viewBox='0 0 111 65'
            >
              <g fill='none' fill-rule='evenodd' stroke='#fb48c4'>
                <path d='M111 32.5H1M33 65L1 32.998 33 1'></path>
              </g>
            </svg>
          </button>
          <div className='flex flex-col items-center space-y-4 w-72'>
            <div className='text-gray-500 tracking-widest text-center leading-9 font-medium text-3xl'>
              {(count >= 0 || count >= reviews.length) && reviews[count].review}
            </div>
            <div className='text-gray-500 tracking-widest text-center leading-9 font-medium text-lg uppercase'>
              {(count >= 0 || count >= reviews.length) && reviews[count].name}
            </div>
          </div>
          <button
            onClick={() => {
              if (count >= reviews.length - 1) {
                return setCount(0);
              }
              setCount(count + 1);
            }}
          >
            <svg
              aria-hidden='true'
              focusable='false'
              role='presentation'
              class='icon icon--wide icon-arrow w-28 rotate-180'
              viewBox='0 0 111 65'
            >
              <g fill='none' fill-rule='evenodd' stroke='#fb48c4'>
                <path d='M111 32.5H1M33 65L1 32.998 33 1'></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ReviewCarousel;
