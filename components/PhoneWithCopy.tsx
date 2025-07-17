'use client';

import { useState } from 'react';
import { Phone, Copy, Check } from 'lucide-react';

interface PhoneWithCopyProps {
  phoneNumber: string;
  className?: string;
  showNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function PhoneWithCopy({ 
  phoneNumber, 
  className = '', 
  showNumber = true,
  size = 'md'
}: PhoneWithCopyProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy phone number:', err);
    }
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center space-x-2 transition-all duration-200 hover:text-coffee ${className}`}
      title={isHovered ? 'Натисніть, щоб скопіювати' : phoneNumber}
    >
      {isCopied ? (
        <>
          <Check className={`${iconSizes[size]} text-green-600`} />
          {showNumber && <span className={`${textSizes[size]} text-green-600 font-medium`}>Скопійовано!</span>}
        </>
      ) : isHovered ? (
        <>
          <Copy className={iconSizes[size]} />
          {showNumber && <span className={`${textSizes[size]} font-medium`}>Копіювати</span>}
        </>
      ) : (
        <>
          <Phone className={iconSizes[size]} />
          {showNumber && <span className={textSizes[size]}>{phoneNumber}</span>}
        </>
      )}
    </button>
  );
}