import { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-30
      "
    >
      <div
        className="
          absolute
          w-[400px]
          h-[400px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          transition-all
          duration-100
        "
        style={{
          left: position.x - 200,
          top: position.y - 200,
        }}
      />
    </div>
  );
};

export default CursorGlow;
