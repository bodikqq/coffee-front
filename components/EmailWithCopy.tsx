'use client';

import { useState } from 'react';
import { Mail, Copy, Check } from 'lucide-react';

interface EmailWithCopyProps {
  email: string;
  className?: string;
  showEmail?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function EmailWithCopy({ 
  email, 
  className = '', 
  showEmail = true,
  size = 'md'
}: EmailWithCopyProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
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
    <div
      className={`inline-flex items-center transition-all duration-200 ${className}`}
    >
      <button
        onClick={handleCopy}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center space-x-2 hover:text-coffee transition-colors duration-200 relative"
        title={isHovered ? 'Натисніть, щоб скопіювати' : email}
      >
        <div className="relative flex items-center space-x-2">
          <div className={`transition-all duration-300 ${isCopied ? 'opacity-100' : isHovered ? 'opacity-0' : 'opacity-100'}`}>
            <Mail className={iconSizes[size]} />
          </div>
          <div className={`absolute left-0 transition-all duration-300 ${isHovered && !isCopied ? 'opacity-100' : 'opacity-0'}`}>
            <Copy className={iconSizes[size]} />
          </div>
          <div className={`absolute left-0 transition-all duration-300 ${isCopied ? 'opacity-100' : 'opacity-0'}`}>
            <Check className={`${iconSizes[size]} text-green-600`} />
          </div>
        </div>
        
        {showEmail && (
          <div className="relative">
            <span className={`${textSizes[size]} transition-all duration-300 ${isCopied ? 'opacity-0' : isHovered ? 'opacity-0' : 'opacity-100'}`}>
              {email}
            </span>
            <span className={`absolute left-0 top-0 ${textSizes[size]} font-medium transition-all duration-300 ${isHovered && !isCopied ? 'opacity-100' : 'opacity-0'}`}>
              Копіювати
            </span>
            <span className={`absolute left-0 top-0 ${textSizes[size]} text-green-600 font-medium transition-all duration-300 ${isCopied ? 'opacity-100' : 'opacity-0'}`}>
              Скопійовано!
            </span>
          </div>
        )}
      </button>
    </div>
  );
}