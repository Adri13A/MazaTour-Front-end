import { JSX } from 'react';

interface CardIconProps {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
}

const CardIcon = ({ icon, label, onClick }: CardIconProps) => {
  return (
<div
  onClick={onClick}
  className="group relative w-16 h-12 rounded-xl flex items-center justify-center bg-white text-[color:#4B4B4B] cursor-pointer shadow-md border-1 
             transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-xl"
  role="button"
  tabIndex={0}
  onKeyDown={e => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      onClick();
    }
  }}
  aria-label={label}
>
  {/* Icono centrado */}
  <div className="flex items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-110">
    {icon}
  </div>

  {/* Label aparece al hover */}
  <span className="absolute bottom-[-1.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center w-full text-xs">
    {label}
  </span>
</div>

  );
};

export default CardIcon;
