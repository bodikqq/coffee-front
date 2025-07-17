import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from './ContactForm';
import { Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
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
          <ContactForm />
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-warm-gray mb-6">Контактна інформація</h2>
              <div className="space-y-6">
                {/* Phone */}
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
                {/* Email */}
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
                {/* Address */}
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
              { question: 'Як швидко можна записатися на прийом?', answer: 'Зазвичай ми можемо запропонувати прийом протягом 1-3 днів. У невідкладних випадках організовуємо прийом в день звернення.' },
              { question: 'Чи потрібно приносити медичну картку?', answer: 'Бажано мати з собою попередні аналізи та висновки лікарів, якщо такі є. Це допоможе краще зрозуміти вашу медичну історію.' },
              { question: 'Скільки триває консультація?', answer: 'Первинна консультація триває 60 хвилин, повторна - 45 хвилин. Ми не поспішаємо і приділяємо достатньо часу кожному пацієнту.' },
              { question: 'Чи можна скасувати або перенести прийом?', answer: 'Так, ви можете скасувати або перенести прийом за 24 години до призначеного часу без додаткових витрат.' }
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