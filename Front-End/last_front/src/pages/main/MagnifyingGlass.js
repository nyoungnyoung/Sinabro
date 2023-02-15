import React, { useState, useRef, useEffect } from "react";

const MagnifyingGlass = () => {
  const [zoom, setZoom] = useState(2);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = e => {
      setCursorX(e.clientX);
      setCursorY(e.clientY);
    };
    imageRef.current.addEventListener("mousemove", handleMouseMove);
    return () => {
      imageRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "200px",
        height: "200px",
        margin: "0 auto",
        overflow: "hidden",
      }}
    >
      <img
        ref={imageRef}
        src="https://via.placeholder.com/200x200"
        alt="placeholder"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: `scale(${zoom})`,
          transformOrigin: `${
            (cursorX - imageRef.current.offsetLeft) /
            (imageRef.current.offsetWidth / zoom)
          }px ${
            (cursorY - imageRef.current.offsetTop) /
            (imageRef.current.offsetHeight / zoom)
          }px`,
          width: `${100 / zoom}%`,
          height: `${100 / zoom}%`,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "50px",
          height: "50px",
          margin: "-25px 0 0 -25px",
          background: "rgba(255, 255, 255, 0.5)",
          borderRadius: "50%",
          cursor: "zoom-in",
        }}
        onClick={() => setZoom(zoom + 1)}
      />
    </div>
  );
};

export default MagnifyingGlass;
