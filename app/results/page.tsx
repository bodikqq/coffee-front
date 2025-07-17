import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { 
  TrendingUp, 
  Heart, 
  Activity, 
  Users, 
  Award,
  Calendar,
  Star,
  CheckCircle
} from 'lucide-react';

export default function Results() {
  const statistics = [
    {
      icon: Users,
      number: '2000+',
      label: 'Задоволених пацієнтів',
      description: 'За 15 років практики'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Позитивних відгуків',
      description: 'Високий рівень довіри'
    },
    {
      icon: Activity,
      number: '95%',
      label: 'Успішних діагнозів',
      description: 'Точність діагностики'
    },
    {
      icon: Award,
      number: '15',
      label: 'Років досвіду',
      description: 'Професійної практики'
    }
  ];

  const testimonials = [
    {
      name: 'Марія Іванова',
      age: '45 років',
      condition: 'Гіпертонія',
      result: 'Після 3 місяців лікування тиск нормалізувався з 160/100 до 130/80. Почуваюся набагато краще!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Андрій Коваленко',
      age: '38 років',
      condition: 'Діабет 2 типу',
      result: 'Завдяки індивідуальному плану лікування вдалося знизити рівень цукру з 12 до 6.5 ммоль/л.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Олена Сидоренко',
      age: '52 роки',
      condition: 'Хронічна втома',
      result: 'Після комплексного обстеження виявили дефіцит вітамінів. Лікування допомогло повернути енергію.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Василь Петров',
      age: '60 років',
      condition: 'Профілактика',
      result: 'Регулярні огляди допомогли виявити проблеми на ранній стадії. Дякую за уважність!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const successStories = [
    {
      title: 'Успішне лікування гіпертонії',
      description: 'Пацієнтка з високим тиском за 4 місяці досягла стабільних показників',
      beforeAfter: {
        before: 'Тиск: 170/110 мм рт.ст.',
        after: 'Тиск: 125/80 мм рт.ст.'
      },
      duration: '4 місяці лікування'
    },
    {
      title: 'Нормалізація рівня цукру',
      description: 'Комплексний підхід до лікування діабету дав відмінні результати',
      beforeAfter: {
        before: 'Глюкоза: 13.2 ммоль/л',
        after: 'Глюкоза: 6.8 ммоль/л'
      },
      duration: '6 місяців лікування'
    },
    {
      title: 'Відновлення після COVID-19',
      description: 'Реабілітаційна програма допомогла повністю відновити здоров\'я',
      beforeAfter: {
        before: 'Задишка, слабкість',
        after: 'Повне відновлення'
      },
      duration: '3 місяці реабілітації'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-warm-gray mb-6">
            Результати лікування
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Реальні історії успіху наших пацієнтів. Кожен результат — це підтвердження 
            ефективності індивідуального підходу до лікування.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-sage" />
                </div>
                <div className="text-3xl font-bold text-coffee mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-warm-gray mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-16 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Результати лікування</h2>
            <p className="text-lg text-gray-600">Результати до та після лікування наших пацієнтів</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Лікування опіків',
                category: 'Комбустіологія',
                duration: '3 місяці лікування',
                combinedImage: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Хірургія кисті',
                category: 'Хірургія кисті та стопи',
                duration: '2 місяці реабілітації',
                combinedImage: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Пластична операція',
                category: 'Пластична хірургія',
                duration: '6 місяців відновлення',
                combinedImage: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Регенеративна терапія',
                category: 'Регенеративна терапія',
                duration: '4 місяці лікування',
                combinedImage: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Відновлення після травми',
                category: 'Хірургія кисті та стопи',
                duration: '5 місяців реабілітації',
                combinedImage: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Комплексне лікування',
                category: 'Комбустіологія',
                duration: '8 місяців лікування',
                combinedImage: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
            ].map((result, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative">
                  <img
                    src={result.combinedImage}
                    alt={`${result.title} - результати лікування`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <span className="bg-warm-gray/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      До
                    </span>
                    <span className="bg-sage/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                      Після
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-warm-gray mb-2">{result.title}</h3>
                  <div className="mb-3">
                    <span className="inline-block bg-sage/10 text-sage px-2 py-1 rounded text-xs font-medium">
                      {result.category}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-sage" />
                    <span>{result.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Guarantee */}
      <section className="py-16 bg-beige/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-gray mb-6">Наша гарантія якості</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Ми гарантуємо індивідуальний підхід до кожного пацієнта та прозорість у всіх 
            етапах лікування. Якщо ви не задоволені результатами, ми продовжимо працювати 
            над вашим здоров'ям до досягнення позитивного результату.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-semibold text-warm-gray mb-2">Контроль прогресу</h3>
              <p className="text-sm text-gray-600 text-center">
                Регулярний моніторинг результатів лікування
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-semibold text-warm-gray mb-2">Індивідуальний план</h3>
              <p className="text-sm text-gray-600 text-center">
                Персоналізований підхід до кожного пацієнта
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-sage/10 rounded-full flex items-center justify-center mb-3">
                <Award className="w-6 h-6 text-sage" />
              </div>
              <h3 className="font-semibold text-warm-gray mb-2">Професіоналізм</h3>
              <p className="text-sm text-gray-600 text-center">
                15 років досвіду та постійне навчання
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-sage text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Готові стати наступною історією успіху?</h2>
          <p className="text-xl mb-8 opacity-90">
            Запишіться на консультацію та розпочніть свій шлях до здоров'я
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