import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import PhoneWithCopy from '@/components/PhoneWithCopy';
import { 
  Heart, 
  Shield, 
  Clock, 
  Award, 
  Calendar,
  CheckCircle,
  Star,
  Stethoscope,
  Hand,
  Sparkles,
  Zap
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-warm-gray mb-6 leading-tight">
                Професійна медична допомога з{' '}
                <span className="text-coffee">турботою</span> про ваше здоров'я
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Лікар Ростислав Юрійович надає якісні медичні послуги в комфортній атмосфері. 
                Індивідуальний підхід до кожного пацієнта та сучасні методи лікування.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-sage text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-center flex items-center justify-center space-x-2"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Записатися на прийом</span>
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-sage text-sage px-8 py-4 rounded-lg font-semibold hover:bg-sage hover:text-white transition-all duration-200 text-center"
                >
                  Наші послуги
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-beige rounded-2xl p-8 shadow-lg">
                <img
                  src="/doc-image.jpg"
                  alt="Лікар Ростислав Кучінка"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-semibold text-warm-gray">Лікар Ростислав Кучінка</h3>
                  <p className="text-coffee">Більше 20 років досвіду</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">
              Чому обирають нашу клініку?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ми поєднуємо професіоналізм з людяністю, створюючи комфортне середовище для лікування
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Індивідуальний підхід',
                description: 'Кожен пацієнт отримує персональну увагу та план лікування'
              },
              {
                icon: Shield,
                title: 'Безпека та якість',
                description: 'Сучасне обладнання та дотримання всіх медичних стандартів'
              },
              {
                icon: Clock,
                title: 'Зручний графік',
                description: 'Гнучкий розклад прийомів, включаючи вечірні години'
              },
              {
                icon: Award,
                title: 'Досвід та кваліфікація',
                description: '15 років практики та постійне підвищення кваліфікації'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-sage" />
                </div>
                <h3 className="text-lg font-semibold text-warm-gray mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Основні послуги</h2>
            <p className="text-lg text-gray-600">Спеціалізовані медичні послуги</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Комбустіологія',
                description: 'Лікування опіків та відновлення шкіри',
                icon: Sparkles,
                category: 'Комбустіологія'
              },
              {
                title: 'Хірургія кисті та стопи',
                description: 'Спеціалізовані операції на кистях та стопах',
                icon: Hand,
                category: 'Хірургія кисті та стопи'
              },
              {
                title: 'Пластична хірургія',
                description: 'Естетична та реконструктивна хірургія',
                icon: Stethoscope,
                category: 'Пластична хірургія'
              },
              {
                title: 'Регенеративна терапія',
                description: 'Сучасні методи відновлення тканин',
                icon: Zap,
                category: 'Регенеративна терапія'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group">
                <div className="p-6 text-center">
                  <div className="w-16 h-16 bg-sage/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-colors mx-auto">
                    <service.icon className="w-8 h-8 text-sage" />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-gray mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <button
                    onClick={() => {
                      window.location.href = `/services#${encodeURIComponent(service.category)}`;
                    }}
                    className="text-sage font-medium hover:text-coffee transition-colors"
                  >
                    Дізнатися більше →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Відгуки пацієнтів</h2>
            <p className="text-lg text-gray-600">Що кажуть наші пацієнти про лікування</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Марія Іванова',
                text: 'Дуже уважний лікар, завжди вислухає і дасть корисні поради. Рекомендую!',
                rating: 5
              },
              {
                name: 'Андрій Коваленко',
                text: 'Професійний підхід та комфортна атмосфера. Дякую за якісне лікування.',
                rating: 5
              },
              {
                name: 'Олена Сидоренко',
                text: 'Чудовий лікар! Швидко поставила діагноз і призначила ефективне лікування.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-warm-gray">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Готові подбати про своє здоров'я?</h2>
          <p className="text-xl mb-8 opacity-90">
            Зателефонуйте нам або залиште заявку онлайн для запису на прийом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-sage px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Записатися онлайн</span>
            </Link>
            <PhoneWithCopy 
              phoneNumber="+380 50 507 62 04" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-sage transition-colors inline-flex items-center justify-center space-x-2"
              size="md"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}