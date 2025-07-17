import Link from 'next/link';
import { Mail, MapPin, Clock } from 'lucide-react';
import PhoneWithCopy from './PhoneWithCopy';

export default function Footer() {
  return (
    <footer className="bg-warm-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-beige">Контактна інформація</h3>
            <div className="space-y-3">
              <PhoneWithCopy 
                phoneNumber="+380 50 507 62 04" 
                className="text-white space-x-3"
                size="md"
              />
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sage" />
                <span>info@petrenko-clinic.ua</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-sage" />
                <span>Київ, вул. Хрещатик 1, оф. 205</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-beige">Години роботи</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-sage" />
                <div>
                  <p>Пн-Пт: 9:00 - 18:00</p>
                  <p>Сб: 10:00 - 16:00</p>
                  <p>Нд: Вихідний</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-beige">Швидкі посилання</h3>
            <div className="space-y-2">
              <Link href="/services" className="block hover:text-sage transition-colors">
                Послуги
              </Link>
              <Link href="/about" className="block hover:text-sage transition-colors">
                Про лікаря
              </Link>
              <Link href="/prices" className="block hover:text-sage transition-colors">
                Ціни
              </Link>
              <Link href="/contact" className="block hover:text-sage transition-colors">
                Записатися на прийом
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Приватна клініка доктора Петренко. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
}