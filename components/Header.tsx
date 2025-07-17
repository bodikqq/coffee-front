'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';
import PhoneWithCopy from './PhoneWithCopy';

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
              <h1 className="text-xl font-bold text-warm-gray">Ростислав Кучінка</h1>
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
            <PhoneWithCopy 
              phoneNumber="+380 50 507 62 04" 
              className="text-sage"
              size="sm"
            />
            <div className="flex items-center space-x-1 text-sage">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">Київ, вул. Хрещатик 1</span>
            </div>
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
              <PhoneWithCopy 
                phoneNumber="+380 50 507 62 04" 
                className="text-sage"
                size="sm"
              />
              <div className="flex items-center space-x-2 text-sage">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Київ, вул. Хрещатик 1</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}