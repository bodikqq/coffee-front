'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            message: formData.message,
        };

        try {
            const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
            const res = await fetch(`${baseUrl}/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error('Failed to submit form');
            await res.json();
            setIsSubmitted(true);
        } catch (err) {
            console.error(err);
            alert('Виникла помилка при надсиланні форми. Спробуйте ще раз.');
        }

        // send the form data to your backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        }, 3000);
    };

    return (
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
                        <label htmlFor="message" className="block text-sm font-medium text-warm-gray mb-2">
                            Додаткова інформація *
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
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
                    <p className="text-sm text-gray-500 text_CENTER">
                        * Обов'язкові поля для заповнення
                    </p>
                </form>
            )}
        </div>
    );
}
