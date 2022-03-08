const SecondSection = () => {
  return (
    <>
      {' '}
      <div class='flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2   ml-10 '>
        <div className='bg-gray-300 w-full pb-16 pt-10 px-10'>
          <img
            className=' w-full '
            alt=''
            src='/images/A-Gloei_Smoothie_Creative_04_1080px_720x.jpg'
          />
        </div>
        <div className='bg-yellow-400  w-full p-20 flex flex-col space-y-10 '>
          <p className='text-gray-600 leading-normal font-bold text-5xl tracking-wider'>
            Glowing
            <br />
            Somewhere?
          </p>
          <p className='text-gray-600 leading-relaxed font-medium text-3xl tracking-wider'>
            Hell yeah, you are. For your <br></br> p.m. routine, mix 1 pump <br></br>T.L.C. Framboos
            + 1 pump B- <br></br> Hydra + 1-2 drops of A-Gloei <br></br> for smoother, hydrated,{' '}
            <br></br> thoroughly nourished skin.
          </p>
        </div>
        <div className='bg-lime-400 p-20 flex flex-col w-full space-y-10 '>
          <p className='text-gray-600 leading-normal font-bold text-5xl tracking-wider'>
            Color Words...
          </p>
          <p className='text-gray-600 leading-relaxed font-medium text-3xl tracking-wider'>
            What do a marula yellow<br></br> comb, a neon puffer bag, and <br></br>a bunch of bright
            compact <br></br>mirrors have in common?<br></br> Head to Drunk Life and check
            <br></br>out the bright side of things.
          </p>
        </div>
        <div className='bg-blue-300 w-full p-14'>
          <img
            className='w-full'
            alt=''
            src='/images/10.01_Drunk-Life_HP-Assets-04_c56771fc-460d-4877-b9e4-64fc764c7340_720x.gif'
          />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
