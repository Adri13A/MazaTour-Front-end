import { useRef, useEffect } from 'react';

export function useHorizontalDragScroll<T extends HTMLElement>() {
  const containerRef = useRef<T>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseDown = (e: MouseEvent) => {
      isDown.current = true;
      container.classList.add('dragging');
      startX.current = e.pageX - container.offsetLeft;
      scrollLeft.current = container.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown.current = false;
      container.classList.remove('dragging');
    };

    const onMouseUp = () => {
      isDown.current = false;
      container.classList.remove('dragging');
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 2.5; // sensibilidad
      container.scrollLeft = scrollLeft.current - walk;
    };

    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mouseleave', onMouseLeave);
    container.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      container.removeEventListener('mouseleave', onMouseLeave);
      container.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return containerRef;
}
