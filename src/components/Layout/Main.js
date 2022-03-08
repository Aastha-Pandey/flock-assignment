import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Carousel from './Carousel';
import FirstSection from './FirstSection';
import FourthSection from './FourthSection';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

const Main = () => {
  return (
    <>
      <main>
        <Header />
        <FirstSection />
        <SecondSection />
        <Carousel />
        <ThirdSection />
        <FourthSection />
        <Footer />
      </main>
    </>
  );
};

export default Main;
