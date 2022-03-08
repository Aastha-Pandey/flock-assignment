import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carousel from './Carousel';
import FirstSection from './FirstSection';
import FourthSection from './FourthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';
import { chatIcon, personIcon } from '../../svgicons';

const Main = () => {
  return (
    <>
      <main>
        <Header />
        <div
          className='fixed  mt-32 w-10 text-right text-sm  font-medium text-gray-800'
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
          }}
        >
          Keep your friends close, and your moisturizer closer.
        </div>
        <FirstSection />
        <SecondSection />
        <Carousel />
        <ThirdSection />
        <FourthSection />
        <Footer />
        <div className='fixed bottom-0 right-0 flex space-x-4 p-4'>
          <button className='flex justify-center items-center rounded-full w-4 h-4 p-6 bg-pink-600 '>
            <div>{chatIcon}</div>
          </button>
          <button className='flex justify-center items-center rounded-full w-4 h-4 p-6 bg-gray-500 '>
            <div>{personIcon}</div>
          </button>
        </div>
      </main>
    </>
  );
};

export default Main;
