import React from 'react';

interface MiniCardProps {
    title: string;
    description: string;
    className?: string; // Permitir className opcional
}

const MiniCard: React.FC<MiniCardProps> = ({ title, description, className }) => {
    return (
        <div className={`relative p-4 rounded-2xl bg-white/15 backdrop-blur-md text-white shadow-md font-gantari md:max-w-xs md:mx-auto ${className || ''}`} >
            <h2 className="text-xl font-semibold mb-2 opacity-80">{title}</h2>
            <div className="flex">
                <div className="rounded-lg border-2"></div>
                <div className='p-1'></div>
                <p className="text-wrap text-sm opacity-70">{description}</p>
            </div>
        </div>
    );
};

export default MiniCard;
