import React from 'react';

const MovingText: React.FC = () => {
  return (
    <div className="overflow-hidden w-full bg-[#000] p-2">
      <div className="whitespace-nowrap animate-marquee text-sm text-center text-[#ffffff]">
        Get up to <span className="text-[#ff0000] font-semibold">20%</span> discount on first project{' '}
        <span className="text-[#ff0000] font-semibold text-sm">@its.damilola | @Pawacode</span>
      </div>
    </div>
  );
};

export default MovingText;
