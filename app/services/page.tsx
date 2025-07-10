import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Stethoscope, 
  Heart, 
  Activity, 
  Shield, 
  Users, 
  Calendar,
  CheckCircle,
  Clock
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: 'Загальна терапія',
      description: 'Комплексна діагностика та лікування загальних захворювань',
      features: [
        'Первинний огляд та консультація',
        'Діагностика захворювань',
        'Призначення лікування',
        'Контроль ефективності терапії'
      ],
      duration: '45-60 хв',
      price: 'від 800 грн'
    },
    {
      icon: Heart,
      title: 'Кардіологічні консультації',
      description: 'Діагностика та лікування захворювань серцево-судинної системи',
      features: [
        'ЕКГ та розшифровка',
        'Контроль артеріального тиску',
        'Профілактика серцевих захворювань',
        'Підбір кардіотерапії'
      ],
      duration: '60 хв',
      price: 'від 1000 грн'
    },
    {
      icon: Activity,
      title: 'Профілактичні огляди',
      description: 'Регулярні обстеження для підтримання здоров\'я',
      features: [
        'Загальний огляд організму',
        'Лабораторні дослідження',
        'Рекомендації щодо способу життя',
        'План профілактичних заходів'
      ],
      duration: '90 хв',
      price: 'від 1200 грн'
    },
    {
      icon: Shield,
      title: 'Вакцинація',
      description: 'Профілактичні щеплення для дітей та дорослих',
      features: [
        'Планові щеплення',
        'Вакцинація перед подорожами',
        'Консультація щодо вакцин',
        'Ведення щеплювального календаря'
      ],
      duration: '30 хв',
      price: 'від 500 грн'
    },
    {
      icon: Users,
      title: 'Сімейна медицина',
      description: 'Медичне обслуговування всієї родини',
      features: [
        'Ведення медичних карт сім\'ї',
        'Консультації для всіх вікових груп',
        'Координація лікування',
        'Сімейні медичні програми'
      ],
      duration: '60 хв',
      price: 'від 900 грн'
    },
    {
      icon: Calendar,
      title: 'Диспансеризація',
      description: 'Комплексне медичне обстеження',
      features: [
        'Повний медичний огляд',
        'Лабораторні та інструментальні дослідження',
        'Консультації вузьких спеціалістів',
        'Індивідуальні рекомендації'
      ],
      duration: '2-3 години',
      price: 'від 2500 грн'
    }
  ];

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
            Комплексна медична допомога з індивідуальним підходом до кожного пацієнта. 
            Сучасні методи діагностики та лікування в комфортній атмосфері.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-sage" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-warm-gray mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-sage flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-lg font-semibold text-coffee">
                          {service.price}
                        </div>
                      </div>
                      <Link
                        href="/contact"
                        className="bg-sage text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors"
                      >
                        Записатися
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-gray mb-6">
            Індивідуальний підхід до кожного пацієнта
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Ми розуміємо, що кожен пацієнт унікальний. Тому наші послуги адаптуються під ваші 
            індивідуальні потреби та стан здоров'я. Доктор Петренко приділяє достатньо часу 
            кожному пацієнту для якісної діагностики та ефективного лікування.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Детальна діагностика</h3>
              <p className="text-gray-600">Комплексне обстеження для точного діагнозу</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Турботливе ставлення</h3>
              <p className="text-gray-600">Уважне ставлення до кожного пацієнта</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-2">Безпечне лікування</h3>
              <p className="text-gray-600">Сучасні методи та безпечні препарати</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Потрібна консультація?</h2>
          <p className="text-xl mb-8 opacity-90">
            Зателефонуйте нам або залиште заявку для запису на прийом
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