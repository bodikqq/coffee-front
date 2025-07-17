import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PricesList from './PricesList';
import Link from 'next/link';
import { 
  Check, 
  Calendar, 
  Clock, 
  Heart,
  Shield,
  Star,
  Users
} from 'lucide-react';

export default function Prices() {
  const packages = [
    {
      name: 'Базовий пакет',
      price: '2500',
      period: 'на рік',
      description: 'Основна медична підтримка',
      features: [
        '4 планові консультації на рік',
        'Телефонні консультації',
        'Базові діагностичні процедури',
        'Знижка 10% на додаткові послуги'
      ],
      popular: false
    },
    {
      name: 'Стандартний пакет',
      price: '4200',
      period: 'на рік',
      description: 'Комплексне медичне обслуговування',
      features: [
        '6 планових консультацій на рік',
        'Онлайн консультації без обмежень',
        'Повний профілактичний огляд',
        'Всі діагностичні процедури',
        'Знижка 15% на додаткові послуги',
        'Пріоритетний запис'
      ],
      popular: true
    },
    {
      name: 'Преміум пакет',
      price: '6800',
      period: 'на рік',
      description: 'VIP медичне обслуговування',
      features: [
        'Необмежена кількість консультацій',
        'Виїзд лікаря додому (2 рази на рік)',
        'Комплексна диспансеризація',
        'Всі діагностичні процедури',
        'Консультації вузьких спеціалістів',
        'Знижка 20% на додаткові послуги',
        'Цілодобова підтримка'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-warm-gray mb-6">
            Ціни на послуги
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Прозорі ціни на всі медичні послуги. Якісна медична допомога за доступними цінами.
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Річні пакети обслуговування</h2>
            <p className="text-lg text-gray-600">Оберіть оптимальний пакет для вашого здоров'я</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 ${pkg.popular ? 'ring-2 ring-sage' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-sage text-white px-4 py-1 rounded-full text-sm font-medium">
                      Популярний
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-warm-gray mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-coffee">{pkg.price}</span>
                    <span className="text-gray-500 ml-1">грн {pkg.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center block transition-colors ${
                    pkg.popular 
                      ? 'bg-sage text-white hover:bg-opacity-90' 
                      : 'border-2 border-sage text-sage hover:bg-sage hover:text-white'
                  }`}
                >
                  Обрати пакет
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <PricesList />

      {/* Payment Info */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Умови оплати</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-3">Способи оплати</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Готівка в клініці</li>
                <li>• Банківська картка</li>
                <li>• Безготівковий розрахунок</li>
                <li>• Оплата через банк</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-3">Гарантії</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Фіксовані ціни на весь період лікування</li>
                <li>• Повернення коштів при скасуванні за 24 години</li>
                <li>• Безкоштовна консультація при незадовільному результаті</li>
                <li>• Прозорість усіх витрат</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-gray mb-6">Спеціальні пропозиції</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Сімейна знижка</h3>
              <p className="text-gray-600 mb-3">
                При обслуговуванні всієї родини (від 3 осіб) — знижка 15% на всі послуги
              </p>
              <span className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium">
                Економія до 20%
              </span>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Програма лояльності</h3>
              <p className="text-gray-600 mb-3">
                Накопичувальна система знижок для постійних пацієнтів до 25%
              </p>
              <span className="inline-block bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium">
                Вигідно для постійних клієнтів
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Готові інвестувати у своє здоров'я?</h2>
          <p className="text-xl mb-8 opacity-90">
            Оберіть зручний для вас пакет або окрему послугу та запишіться на прийом
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