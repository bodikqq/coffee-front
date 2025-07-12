// app/services/page.tsx
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import ServicesList from './ServicesList';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-warm-gray mb-6">
            Наші послуги
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Спеціалізовані медичні послуги з використанням сучасних методів лікування 
            та індивідуальним підходом до кожного пацієнта.
          </p>
        </div>
      </section>

      {/* Dynamic Services List */}
      <ServicesList />

      {/* Additional Info */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-gray mb-6">
            Індивідуальний підхід до кожного пацієнта
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Всі процедури проводяться з використанням сучасного обладнання та новітніх 
            методик. Доктор Петренко має багаторічний досвід у всіх зазначених напрямках 
            та забезпечує високу якість медичної допомоги.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage">15+</span>
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Років досвіду</h3>
              <p className="text-gray-600">У спеціалізованій хірургії</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage">500+</span>
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Операцій</h3>
              <p className="text-gray-600">Успішно проведених</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sage">98%</span>
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Успішність</h3>
              <p className="text-gray-600">Позитивних результатів</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Потрібна консультація?</h2>
          <p className="text-xl mb-8 opacity-90">
            Зв'яжіться з нами для детальної консультації та запису на прийом
          </p>
          <Link
            href="/contact"
            className="bg-white text-sage px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Calendar className="w-5 h-5" />
            <span>Записатися на прийом</span>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
