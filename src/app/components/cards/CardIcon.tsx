import { JSX } from 'react';

const CardIcon = ({ icon, label }: { icon: JSX.Element; label: string }) => {
  return (
      <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-white text-xs">
        {icon}
        <span>{label}</span>
      </div>
  );
}
export default CardIcon;
