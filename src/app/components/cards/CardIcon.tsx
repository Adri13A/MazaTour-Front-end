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
      className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-white text-xs cursor-pointer"
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
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default CardIcon;
