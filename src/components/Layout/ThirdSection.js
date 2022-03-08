import ReviewCarousel from './ReviewCarousel';

const ThirdSection = () => {
  return (
    <>
      <div className='md:ml-10 lg:ml-10 bg-blue-50 flex flex-col space-y-5 '>
        <img className=' w-full' alt='' src='/images/DE_Site_Banner_1383x456px_1296x.jpg'></img>
        <p className='text-2xl md:text-5xl lg:text-5xl self-center py-10 font-bold tracking-widest text-gray-600'>
          happy skin = healthy skin
        </p>

        <p className='text-gray-600 flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-start font-normal md:px-20 lg:px-20 md:space-x-20 lg:space-x-20 leading-relaxed  text-sm tracking-wider'>
          <img
            style={{ float: 'left' }}
            className='six-image relative'
            data-anim='dyna-slide'
            data-anim-order='3'
            src='https://cdn.shopify.com/s/files/1/0295/0509/3716/files/six.svg?v=1596326295'
            alt='six'
          />
          <p className='px-4  mt-8 tracking-wider absolute text-5xl font-semibold text-gray-500'>
            the<br></br> suspicious
          </p>
          <div className='flex flex-col space-y-10'>
            <p className=' px-20'>
              <h2 className='text-gray-600 leading-relaxed font-medium text-3xl tracking-wider py-2'>
                <span className='text-pink-600 underline decoration-1 px-2'>&nbsp;&nbsp;</span>
                our philosophy
              </h2>
              We are committed to using only ingredients that either<br></br> directly benefit the
              health of the<br></br>
              skin or support the integrity of our formulations. We never take into account<br></br>{' '}
              whether something is synthetic or natural, instead<br></br> choosing ingredients based
              on biocompatibility.{' '}
              <a href='/' className='text-pink-600'>
                Learn more.
              </a>
            </p>
            <p>
              <h2 className='text-gray-600 leading-relaxed font-medium text-3xl tracking-wider py-2'>
                <span className='text-pink-600 underline decoration-1 px-2'>&nbsp;&nbsp;</span>
                the culprits
              </h2>
              We believe six ubiquitous ingredients are at the root of<br></br> almost every skin
              issue we see, and when they're entirely<br></br> removed from one’s routine (when you
              take a<br></br> #drunkbreak), skin can reset and return to a healthy,<br></br>{' '}
              balanced state. That’s our ingredient-elimination<br></br> philosophy for a total skin
              reset.
            </p>
          </div>
        </p>

        <div className='flex flex-col md:flex-row lg:flex-row'>
          <p className='text-gray-600 px-8 md:px-40 lg:px-40 font-normal leading-relaxed  text-sm tracking-wider'>
            <h2 className='text-gray-600  leading-relaxed font-medium text-3xl tracking-wider py-2'>
              <span className='text-pink-600 underline decoration-1 px-2'>&nbsp;&nbsp;</span>
              skincare <span className='line-through'>regimen</span> smoothies
            </h2>
            We think of our skincare routines as smoothies. Just hear<br></br> us out: They’re good
            for you,<br></br> they’re easy to mix, and you can change up the recipe whenever you
            want. Plus, all of<br></br>our products are biocompatible and bioavailable, which
            <br></br>means they’re highly absorbable.{' '}
            <a href='/' className='text-pink-600'>
              Mix it up.
            </a>
            <p className='text-gray-600  justify-self-end text-right font-normal leading-relaxed  text-sm tracking-wider'>
              <h2 className='text-gray-600 leading-relaxed font-medium text-3xl tracking-wider py-2'>
                <span className='text-pink-600 underline decoration-1 px-2'>&nbsp;&nbsp;</span>
                drunk head to toe
              </h2>
              Skin is skin—and whether we call it the scalp or the eye<br></br> area or the legs, it
              can only function at its healthiest<br></br> when it’s treated with smart, nourishing,
              biocompatible<br></br> ingredients. So we decided to make a line of hair-care<br></br>{' '}
              and body products that followed one simple idea:<br></br> Respect the skin by only
              using ingredients it can get<br></br> along with.
            </p>
          </p>
          <img
            style={{ float: 'right', height: '400px' }}
            src='https://cdn.shopify.com/s/files/1/0209/8446/files/DE_Homepage_Blender_PS01.gif?v=1613593435'
            data-anim='dyna-slide'
            data-anim-order='9'
            className='blender '
            alt=''
            width='180'
          ></img>
        </div>
        <ReviewCarousel />
      </div>
    </>
  );
};

export default ThirdSection;
