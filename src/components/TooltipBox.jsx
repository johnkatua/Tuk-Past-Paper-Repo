import { useEffect, useRef } from 'react';

const TooltipBox = ({ onClickOutside, show, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClickOutside && onClickOutside()
      }
    }
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [onClickOutside]);

  if (!show) return null;

  return (
    <div ref={ref}>
      {children}
    </div>
  )
}

export default TooltipBox