// components/Collapse.jsx
import { useRef, useEffect, useState } from "react";

const Collapse = ({ isOpen, children }) => {
  const collapseRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const content = collapseRef.current;
    if (content && isOpen) {
      setTimeout(() => {
        setHeight(content.scrollHeight);
      }, 10);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const animationStyles = `
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes fadeOutDown {
      0% { opacity: 1; transform: translateY(0); }
      100% { opacity: 0; transform: translateY(10px); }
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden mt-4`}
        style={{
          height: isOpen ? height : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div ref={collapseRef}>
          <div
            className="p-4 bg-gray-100 rounded-md shadow-sm"
            style={{
              animation: isOpen
                ? "fadeInUp 0.4s ease-out forwards"
                : "fadeOutDown 0.3s ease-in forwards",
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapse;
