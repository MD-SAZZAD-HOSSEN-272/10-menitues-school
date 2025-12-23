
"use client";

import { useState } from "react";

const TrySomethink = () => {

    const [selected, setSelected] = useState('car')
    const handleSelection = (item) => {
        console.log(item);
        setSelected(item)
    }


  return (
    <div>
      <div className="flex mt-10 gap-5 w-full items-center text-center justify-center">
        <button onClick={() =>handleSelection('car')} className="bg-amber-200 py-3 px-5 rounded-xl text-black font-bold cursor-pointer hover:bg-amber-500 active:bg-amber-800">car</button>
        <button onClick={() =>handleSelection('bike')} className="bg-amber-200 py-3 px-5 rounded-xl text-black font-bold cursor-pointer hover:bg-amber-500 active:bg-amber-800">bike</button>
        <button onClick={() =>handleSelection('plane')} className="bg-amber-200 py-3 px-5 rounded-xl text-black font-bold cursor-pointer hover:bg-amber-500 active:bg-amber-800">air</button>
      </div>
      <div className="grid grid-cols-1 gap-5 items-center justify-center mt-20">
        <img className={`w-56 rounded-xl mx-auto ${selected === 'car' ? 'visible' : 'hidden'}`} src="https://img.freepik.com/free-psd/black-isolated-car_23-2151852894.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        <img className={`w-56 rounded-xl mx-auto ${selected === 'bike' ? 'visible' : 'hidden'}`} src="https://shop.yamaha-motor-india.com/cdn/shop/files/METALLIC_SILVER_CYAN_1200x.webp?v=1754026443" alt="" />
        <img className={`w-56 rounded-xl mx-auto ${selected === 'plane' ? 'visible' : 'hidden'}`} src="https://assets.aboutamazon.com/dims4/default/1f82ece/2147483647/strip/true/crop/2548x1434+1+0/resize/2640x1486!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fd0%2Fa2%2F40ea55214df78a534364fb9c100f%2Fabout-amazon-feature-feature001-amazon-amazonair-zsc-9925-copy-2550x1434.jpg" alt="" />
      </div>
    </div>
  );
};

export default TrySomethink;
