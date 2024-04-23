import React from "react";

const Line = ({ size, mb }: { size: number; mb: number }) => {
  const line = "-";
  return (
    <div
      className={`sm:text-3xl text-xl font-black text-yellow-400 tracking-tighter mb-${mb}`}
    >
      {line.repeat(size)}
    </div>
  );
};

export default Line;
