const FourthSection = () => {
  return (
    <>
      <div className='ml-10 flex flex-col md:grid md:grid-rows-2  md:grid-flow-col lg:grid lg:grid-rows-2  lg:grid-flow-col gap-4 mr-16'>
        <div
          style={{ width: '28rem' }}
          className='bg-yellow-400  pt-8 px-10 space-y-20 md:row-span-3 lg:row-span-3 flex flex-col items-center justify-start'
        >
          <img
            alt='Founder'
            className='h-96 '
            src='https://cdn.shopify.com/s/files/1/0209/8446/files/HP_Tiffany_Image_with_Background_540x.jpg?v=1601061633'
          ></img>
          <div className='space-y-4 flex flex-col'>
            <p className='text-pink-500 uppercase text-xs font-medium tracking-widest self-start'>
              our founder
            </p>
            <p className='text-gray-700 text-xl  font-medium leading-10'>
              When I created Drunk Elephant,<br></br> I isolated the most effective ingredients that
              directly benefit the health of<br></br> the skin. Now I think of Drunk Elephant as an
              ingredient-elimination<br></br> philosophy for a total skin<br></br>
              reset. Using these products exclusively is the best way to get maximum results.”
              —Tiffany Masterson
            </p>
          </div>
        </div>

        <div className=' flex justify-center py-8 '>
          <img
            alt=''
            style={{ width: '24rem' }}
            src='https://cdn.shopify.com/s/files/1/0209/8446/files/drunk_life_540x.jpg?v=1601059666'
          ></img>
          <img
            alt='tote bag'
            style={{ width: '32rem' }}
            src='/images/HP_DrunkLife_Image_Grey_Tote_GIF_180x.gif'
          ></img>
        </div>
        <div className='row-span-2 col-span-2'>
          {' '}
          <img
            alt='Founder'
            className=' w-full object-scale-down'
            src='/images/BWU-1590x894-19_900x.gif'
          ></img>
        </div>
      </div>
    </>
  );
};

export default FourthSection;
