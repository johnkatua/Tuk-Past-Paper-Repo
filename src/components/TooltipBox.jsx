import { useEffect, useRef } from 'react';

const TooltipBox = ({ onClickOutside, show, children, close }) => {
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
    <div className='tooltip--box'>
      <div ref={ref} className='tooltip--box__centered'>
        <div className='tooltip--box__modal'>
          <div className='tooltip--box__header'>
            <button onClick={close}>X</button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TooltipBox