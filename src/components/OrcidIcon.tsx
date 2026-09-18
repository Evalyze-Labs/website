import React from 'react';

export const OrcidIcon: React.FC<{ size?: number; className?: string }> = ({ size = 16, className = 'orcid-icon' }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 256 256" 
      width={size} 
      height={size}
      className={className}
      aria-label="ORCID logo"
    >
      <path 
        fill="#A6CE39" 
        d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128z" 
      />
      <path 
        fill="#FFFFFF" 
        d="M86.3 186.2H70.9V79.1h15.4v107.1zM78.6 63.8c-5.3 0-9.6-4.3-9.6-9.6s4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6c0 5.3-4.3 9.6-9.6 9.6zM108.9 79.1h39.8c30.1 0 46.1 19.3 46.1 44.5 0 26.2-17.7 44.6-46.7 44.6h-39.2V79.1zm15.4 75.3h22.9c18.7 0 31.8-10.7 31.8-30.8 0-19.6-12.8-30.7-31.5-30.7h-23.2v61.5z" 
      />
    </svg>
  );
};
