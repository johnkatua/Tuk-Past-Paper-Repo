import { useEffect, useRef } from "react";
import ToolTipContent from "./ToolTipContent";

const TooltipBox = ({ onClickOutside, show }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!show) return null;

  return (
    <div className="tooltip--box">
      <div ref={ref} className="tooltip--box__centered">
        <div className="tooltip--box__modal">
          <div className="tooltip--box__header">
            <button onClick={onClickOutside}>X</button>
          </div>
          <div className="tooltip--box__content">
            <ToolTipContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TooltipBox;
