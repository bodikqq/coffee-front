'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Phone, MapPin, Copy, Check } from 'lucide-react';

function CopyableContact({ 
  icon: Icon, 
  text, 
  copyText 
}: { 
  icon: React.ComponentType<{ className?: string }>, 
  text: string, 
  copyText: string 
}) {
  const [copied, setCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div 
      className="flex items-center space-x-1 text-sage cursor-pointer transition-all duration-200 hover:text-coffee group relative"
      onClick={handleCopy}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm font-medium select-none min-w-0">
        {text}
      </span>
      <div className={`flex items-center transition-all duration-300 ${
        isHovered || copied ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
      }`}>
        {copied ? (
          <Check className="w-3 h-3 text-green-600 ml-1" />
        ) : (
          <Copy className="w-3 h-3 ml-1" />
        )}
      </div>
      
      {/* Tooltip */}
      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-2 py-1 bg-warm-gray text-white text-xs rounded whitespace-nowrap transition-all duration-200 ${
        copied ? 'opacity-100 translate-y-0' : isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'
      }`}>
        {copied ? 'Скопійовано!' : 'Натисніть, щоб скопіювати'}
      </div>
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Головна', href: '/' },
    { name: 'Послуги', href: '/services' },
    { name: 'Про лікаря', href: '/about' },
    { name: 'Результати', href: '/results' },
    { name: 'Ціни', href: '/prices' },
    { name: "Зв'язок з нами", href: '/contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-sage rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">П</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-warm-gray">Доктор Петренко</h1>
              <p className="text-sm text-coffee">Приватна клініка</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 font-medium ${
                  pathname === item.href 
                    ? 'text-coffee' 
                    : 'text-warm-gray hover:text-coffee'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <CopyableContact 
              icon={Phone} 
              text="+380 67 123 45 67" 
              copyText="+380671234567" 
            />
            <CopyableContact 
              icon={MapPin} 
              text="info@petrenko-clinic.ua" 
              copyText="info@petrenko-clinic.ua" 
            />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-warm-gray hover:text-coffee hover:bg-beige transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-beige">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors duration-200 font-medium py-2 ${
                    pathname === item.href 
                      ? 'text-coffee' 
                      : 'text-warm-gray hover:text-coffee'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-beige space-y-2">
              <CopyableContact 
                icon={Phone} 
                text="+380 67 123 45 67" 
                copyText="+380671234567" 
              />
              <CopyableContact 
                icon={MapPin} 
                text="info@petrenko-clinic.ua" 
                copyText="info@petrenko-clinic.ua" 
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}