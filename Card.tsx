import React from 'react';

// Image asset from Figma
const imgWorkoutCard = "http://localhost:3845/assets/12becbb670304f28057346f740367341df6b53ee.png";

interface CardProps {
  /** The main title/heading of the card */
  title: string;
  /** Optional badge text to display in the top-left corner */
  badge?: string;
  /** Optional background image URL. If not provided, uses the default workout image */
  backgroundImage?: string;
  /** Optional click handler for the card */
  onClick?: () => void;
  /** Additional CSS classes to apply to the card */
  className?: string;
}

export default function Card({ 
  title, 
  badge, 
  backgroundImage = imgWorkoutCard, 
  onClick,
  className = ""
}: CardProps) {
  return (
    <div 
      className={`border border-slate-200 border-solid box-border content-stretch flex flex-col items-start justify-between p-[16px] relative rounded-[8px] size-full ${className}`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Background image with gradient overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <img 
          alt="" 
          className="absolute max-w-none object-50%-50% object-cover rounded-[8px] size-full" 
          src={backgroundImage} 
        />
        <div className="absolute bg-gradient-to-b from-52% from-[rgba(0,0,0,0)] inset-0 rounded-[8px] to-[#000000] to-[94.5%]" />
      </div>
      
      {/* Badge container */}
      <div className="content-stretch flex gap-[42px] items-start relative shrink-0 w-full">
        {badge && (
          <div className="bg-slate-100 box-border content-stretch flex items-center justify-center overflow-clip px-[10px] py-[2px] relative rounded-[9999px] shrink-0">
            <p className="font-['inter:Semi_Bold',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-slate-900 whitespace-pre">
              {badge}
            </p>
          </div>
        )}
      </div>
      
      {/* Title */}
      <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
        <p className="font-['inter:Semi_Bold',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">
          {title}
        </p>
      </div>
    </div>
  );
}
