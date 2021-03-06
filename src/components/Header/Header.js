import { useOnscreen } from '../../customhooks/useOnScreen';
import { cartIcon, hamburgerMenuIcon, searchIcon, userIcon } from '../../svgicons';

const name = 'D r u n k   E l e p h a n t';

const Header = () => {
  const [ref, isVisible] = useOnscreen({
    rootMargin: '50px',
    threshold: '1.0',
  });

  return (
    <>
      <header ref={ref}>
        <nav
          className={
            !isVisible
              ? 'flex z-10 fixed w-screen h-12 px-10 justify-between items-center'
              : 'flex h-12 lg:px-10 md:px-10 justify-evenly md:justify-between lg:justify-between items-center'
          }
          style={{ backgroundColor: 'rgb(112,112,112)' }}
        >
          <div className='flex space-x-3'>
            <aside>{hamburgerMenuIcon}</aside>
            <span className='block md:hidden lg:hidden'>{searchIcon}</span>
          </div>
          {!isVisible ? (
            <img
              className='w-16'
              src='https://cdn.shopify.com/s/files/1/0295/0509/3716/files/full_logomark.svg?v=1595984354'
              alt='Drunk Elephant'
              itemprop='logo'
            />
          ) : (
            <pre className='text-gray-100 font-medium tracking-wide uppercase text-xs font-serif'>
              {name}
              <sup>&trade;</sup>
            </pre>
          )}

          <aside className='flex space-x-3 lg:space-x-5 md:space-x-5'>
            <span className='hidden md:block lg:block'>{searchIcon}</span>
            <span>{cartIcon}</span>
            <span>{userIcon}</span>
          </aside>
        </nav>
      </header>
    </>
  );
};

export default Header;
