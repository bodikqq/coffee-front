'use client';

import React, { useEffect, useState } from 'react';
import { Euro, BatteryWarning as Hryvnia } from 'lucide-react';

type Service = {
  id: number;
  name: string;
  category: string;
  description: string | null;
  showInList: boolean;
  imageUrl: string | null;
  priceUah: number | null;
  priceEur: number | null;
  createdAt: string;
  updatedAt: string;
  reviewCount: number;
};

export default function PricesList() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  
  useEffect(() => {
    fetch(`${baseUrl}/service`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Service[]>;
      })
      .then(data => {
        // only those flagged for listing
        setServices(data.filter(s => s.showInList));
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-600">Завантаження цін...</p>
      </div>
    </section>
  );
  
  if (error) return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-red-500">Помилка завантаження: {error}</p>
      </div>
    </section>
  );

  // group by category
  const grouped = services.reduce<Record<string, Service[]>>((acc, svc) => {
    acc[svc.category] = acc[svc.category] || [];
    acc[svc.category].push(svc);
    return acc;
  }, {});

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} id={category} className="bg-white rounded-xl shadow-sm p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-warm-gray mb-8 pb-4 border-b-2 border-sage/20">
                {category}
              </h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between py-4 px-6 rounded-lg bg-beige/10 hover:bg-beige/20 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0 mt-3" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-warm-gray mb-1">
                          {item.name}
                        </h3>
                        {item.description && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="text-right flex-shrink-0 ml-6">
                      {item.priceUah && (
                        <div className="flex items-center text-xl font-bold text-coffee mb-1">
                          <span>{item.priceUah}</span>
                          <Hryvnia className="w-4 h-4 ml-1" />
                        </div>
                      )}
                      {item.priceEur && (
                        <div className="flex items-center text-sm text-gray-500">
                          <span>{item.priceEur}</span>
                          <Euro className="w-3 h-3 ml-1" />
                        </div>
                      )}
                      {!item.priceUah && !item.priceEur && (
                        <div className="text-sm text-gray-500">
                          За домовленістю
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {Object.keys(grouped).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Послуги завантажуються...</p>
          </div>
        )}
      </div>
    </section>
  );
}