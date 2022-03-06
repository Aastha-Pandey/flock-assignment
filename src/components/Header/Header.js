import { cartIcon, hamburgerMenuIcon, searchIcon, userIcon } from '../../svgicons';

const name = 'D r u n k   E l e p h a n t';
const Header = () => {
  return (
    <>
      <header>
        <nav
          className='flex h-12 px-10 justify-between items-center'
          style={{ backgroundColor: 'rgb(112,112,112)' }}
        >
          <aside>{hamburgerMenuIcon}</aside>
          <pre className='text-gray-100 font-medium tracking-wide uppercase text-xs font-serif'>
            {name}
            <sup>&trade;</sup>
          </pre>
          <aside className='flex space-x-5'>
            <span>{searchIcon}</span>
            <span>{cartIcon}</span>
            <span>{userIcon}</span>
          </aside>
        </nav>
      </header>
    </>
  );
};

export default Header;
