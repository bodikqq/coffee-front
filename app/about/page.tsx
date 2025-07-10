import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  Award, 
  BookOpen, 
  Users, 
  Heart, 
  Calendar,
  GraduationCap,
  Briefcase,
  Star
} from 'lucide-react';

export default function About() {
  const achievements = [
    {
      year: '2009',
      title: 'Закінчення медичного університету',
      description: 'Національний медичний університет імені О.О. Богомольця, спеціальність "Лікувальна справа"'
    },
    {
      year: '2011',
      title: 'Інтернатура',
      description: 'Інтернатура з внутрішньої медицини в Київській міській клінічній лікарні'
    },
    {
      year: '2014',
      title: 'Спеціалізація',
      description: 'Спеціалізація з сімейної медицини та загальної практики'
    },
    {
      year: '2018',
      title: 'Відкриття приватної практики',
      description: 'Початок роботи в приватній клініці з фокусом на індивідуальний підхід'
    },
    {
      year: '2024',
      title: 'Сертифікація',
      description: 'Отримання міжнародної сертифікації з превентивної медицини'
    }
  ];

  const specializations = [
    'Загальна терапія та внутрішня медицина',
    'Сімейна медицина',
    'Превентивна медицина',
    'Кардіологія',
    'Ендокринологія',
    'Гастроентерологія'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-warm-gray mb-6">
                Доктор Олена Петренко
              </h1>
              <p className="text-xl text-coffee mb-6">
                Сімейний лікар, спеціаліст з внутрішньої медицини
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Понад 15 років досвіду в медицині. Моя місія — надавати якісну медичну допомогу 
                з індивідуальним підходом до кожного пацієнта. Вірю, що здоров'я — це не лише 
                відсутність хвороби, а стан повного фізичного, психічного та соціального благополуччя.
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-sage" />
                  <span className="text-gray-600">2000+ пацієнтів</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-sage" />
                  <span className="text-gray-600">15 років досвіду</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="bg-sage text-white px-8 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-colors inline-flex items-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Записатися на прийом</span>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-beige rounded-2xl p-8 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Доктор Олена Петренко"
                  className="w-full h-96 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">
                    "Професіоналізм поєднаний з людяністю"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Освіта та досвід</h2>
            <p className="text-lg text-gray-600">Шлях професійного розвитку</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-sage/20"></div>
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-sage font-bold text-lg mb-2">{achievement.year}</div>
                      <h3 className="text-xl font-semibold text-warm-gray mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-sage rounded-full border-4 border-white shadow-md"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Спеціалізації</h2>
            <p className="text-lg text-gray-600">Основні напрямки медичної практики</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specializations.map((specialization, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{specialization}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-6">Моя філософія лікування</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-3">Індивідуальний підхід</h3>
              <p className="text-gray-600">
                Кожен пацієнт унікальний, тому лікування має бути персоналізованим та враховувати 
                всі особливості організму.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-3">Постійне навчання</h3>
              <p className="text-gray-600">
                Медицина постійно розвивається, тому важливо слідкувати за новітніми методами 
                діагностики та лікування.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-lg font-semibold text-warm-gray mb-3">Довіра та співпраця</h3>
              <p className="text-gray-600">
                Успішне лікування можливе лише за умови довіри між лікарем та пацієнтом, 
                відкритого діалогу та співпраці.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-light text-gray-600 italic mb-6">
            "Моя мета — не просто лікувати хвороби, а допомагати людям жити повноцінним 
            та здоровим життям. Кожен пацієнт для мене — це не діагноз, а людина з 
            унікальною історією та потребами."
          </blockquote>
          <cite className="text-lg font-semibold text-coffee">— Доктор Олена Петренко</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Готові розпочати турботу про своє здоров'я?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишіться на консультацію та отримайте професійну медичну допомогу
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