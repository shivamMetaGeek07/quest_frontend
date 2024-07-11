// components/TrapeziumWrapper.tsx
import React from 'react';

type TrapeziumWrapperProps = {
  imageUrl: string;
  height: string;
  width: string;
};

const TrapeziumWrapper: React.FC<TrapeziumWrapperProps> = ({ imageUrl, height, width }) => {
  return (
    <div>
      <div className={`relative bg-cover bg-center w-[${width}] h-[${height}]`} style={{ backgroundImage: `url(${imageUrl})`}}>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/10 bg-black clip-trapezium-left"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/10 bg-black clip-trapezium-right"></div>
      </div>
    </div>
  );
};

export default TrapeziumWrapper;

{/* <TrapeziumWrapper imageUrl="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" height="48" width="72" ></TrapeziumWrapper> */}
