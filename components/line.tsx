import React from "react";

const Line = ({ size, mb }: { size: number; mb: number }) => {
  const line = "-";
  return (
    <div
      className={`text-3xl font-black text-yellow-400 tracking-tighter mb-${mb}`}
    >
      {line.repeat(size)}
    </div>
  );
};

export default Line;
