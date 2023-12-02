import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";
import animationData from "../../assets/Loading1.json";

const FullScreenLoader = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300 bg-opacity-10 z-40">
      <div className="flex flex-col items-center justify-center h-screen w-screen z-50">
        <div ref={containerRef} />
        <p className="text-black text-2xl mt-4">Hello how are you ... 😀</p>
      </div>
    </div>
  );
};

export default FullScreenLoader;
