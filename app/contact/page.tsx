'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Send,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Первинна консультація',
    'Повторна консультація',
    'Профілактичний огляд',
    'Кардіологічна консультація',
    'Ендокринологічна консультація',
    'Вакцинація',
    'Онлайн консультація',
    'Інше'
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-beige/20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-warm-gray mb-6">
            Зв'язок з нами
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Запишіться на прийом або зв'яжіться з нами для отримання консультації. 
            Ми завжди готові допомогти вам у питаннях здоров'я.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-warm-gray mb-6">Записатися на прийом</h2>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-warm-gray mb-2">Заявка надіслана!</h3>
                <p className="text-gray-600">
                  Дякуємо за звернення. Ми зв'яжемося з вами найближчим часом для підтвердження запису.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-warm-gray mb-2">
                      Ім'я та прізвище *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                      placeholder="Введіть ваше ім'я"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-warm-gray mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                      placeholder="+380 67 123 45 67"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-warm-gray mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-warm-gray mb-2">
                    Оберіть послугу *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                  >
                    <option value="">Оберіть послугу</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-warm-gray mb-2">
                      Бажана дата *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-warm-gray mb-2">
                      Бажаний час *
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors"
                    >
                      <option value="">Оберіть час</option>
                      {timeSlots.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-warm-gray mb-2">
                    Додаткова інформація
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent transition-colors resize-none"
                    placeholder="Опишіть ваші скарги або питання..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-sage text-white py-4 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Надіслати заявку</span>
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Обов'язкові поля для заповнення
                </p>
              </form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-warm-gray mb-6">Контактна інформація</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-gray mb-1">Телефон</h3>
                    <p className="text-gray-600">+380 67 123 45 67</p>
                    <p className="text-sm text-gray-500">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-gray mb-1">Email</h3>
                    <p className="text-gray-600">info@petrenko-clinic.ua</p>
                    <p className="text-sm text-gray-500">Відповідаємо протягом 24 годин</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-warm-gray mb-1">Адреса</h3>
                    <p className="text-gray-600">м. Київ, вул. Хрещатик 1</p>
                    <p className="text-gray-600">офіс 205, 2-й поверх</p>
                    <p className="text-sm text-gray-500">Метро "Майдан Незалежності"</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-warm-gray mb-6">Години роботи</h2>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Понеділок - П'ятниця</span>
                  <span className="font-semibold text-warm-gray">9:00 - 18:00</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Субота</span>
                  <span className="font-semibold text-warm-gray">10:00 - 16:00</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-600">Неділя</span>
                  <span className="font-semibold text-red-500">Вихідний</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-beige/30 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-warm-gray">Екстрені випадки</p>
                    <p className="text-sm text-gray-600">
                      У невідкладних випадках телефонуйте за номером +380 67 123 45 67. 
                      Ми організуємо прийом поза робочими годинами.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-warm-gray mb-6">Як нас знайти</h2>
              <div className="bg-beige/20 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-sage mx-auto mb-3" />
                  <p className="text-gray-600">Інтерактивна карта</p>
                  <p className="text-sm text-gray-500">м. Київ, вул. Хрещатик 1, оф. 205</p>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                <p>🚇 Метро: "Майдан Незалежності" (5 хв пішки)</p>
                <p>🚌 Автобус: зупинка "Хрещатик"</p>
                <p>🚗 Паркування: платна парковка поруч</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-beige/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-warm-gray mb-4">Часті питання</h2>
            <p className="text-lg text-gray-600">Відповіді на найпоширеніші запитання</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Як швидко можна записатися на прийом?',
                answer: 'Зазвичай ми можемо запропонувати прийом протягом 1-3 днів. У невідкладних випадках організовуємо прийом в день звернення.'
              },
              {
                question: 'Чи потрібно приносити медичну картку?',
                answer: 'Бажано мати з собою попередні аналізи та висновки лікарів, якщо такі є. Це допоможе краще зрозуміти вашу медичну історію.'
              },
              {
                question: 'Скільки триває консультація?',
                answer: 'Первинна консультація триває 60 хвилин, повторна - 45 хвилин. Ми не поспішаємо і приділяємо достатньо часу кожному пацієнту.'
              },
              {
                question: 'Чи можна скасувати або перенести прийом?',
                answer: 'Так, ви можете скасувати або перенести прийом за 24 години до призначеного часу без додаткових витрат.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-warm-gray mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}