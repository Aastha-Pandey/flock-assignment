import { useState } from 'react';
import './../../../src/App.css';

const products = [
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/02ab8404a2bf--T.L.C.BabyFacial-50ml-9-18_720x.png?v=1601313438',
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/546b63aca26b--T.L.C.Framboos-30ml-New-Label-1080x1080_720x.png?v=1612566073',
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/b26f7d875468--Beste-150ml-ClosedCap-1080_720x.png?v=1601442898',
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/53accfd0b692--LalaRetro-50ml-whipped-10072020-Hero_720x.png?v=1602093119',
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/3a344a36e50e--ProiniPowerpeptide-30ml-Hero-1_720x.png?v=1615250989',
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/4cead1fdebdd--Protini-50ml-10072020-Hero_720x.png?v=1602092864',
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/11700fc4ff0c--UmbraOil-30ml-ClosedCap-1080_720x.png?v=1601445394',
  'https://cdn.shopify.com/s/files/1/0209/8446/t/147/assets/96bf8ba5ba9d--R02-C-Firma-Serum-1080_720x.png?v=1632241791',
];

const Carousel = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(4);

  return (
    <>
      <div className='ml-10 py-8 caret-pink-500 custom_cursor'>
        <h1
          style={{ fontSize: '12rem', color: 'rgb(255, 255, 26)' }}
          className=' tracking-widest text-center font-semibold'
        >
          the line
        </h1>

        <div className='flex justify-around '>
          {products.slice(start, end).map((product) => {
            return (
              <div
                draggable={true}
                onDragStart={() => {
                  if (end === products.length) {
                    setStart(0);
                    setEnd(4);
                    return;
                  }
                  setStart(end);
                  setEnd(end + 4);
                }}
                className='relative hover:opacity-60 hover:bg-pink-500 rounded-full h-72 w-72'
              >
                <img alt='product' src={`${product}`}></img>
                <p className='absolute text-lg font-medium inset-0 flex text-transparent hover:text-opacity-100 hover:text-pink-100 justify-center'></p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Carousel;
