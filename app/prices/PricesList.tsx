'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

  if (loading) {
    return (
      <section className="py-16 bg-beige/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-600">Завантаження послуг...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-beige/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-500">Помилка завантаження: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  // group by category
  const grouped = services.reduce<Record<string, Service[]>>((acc, svc) => {
    acc[svc.category] = acc[svc.category] || [];
    acc[svc.category].push(svc);
    return acc;
  }, {});

  return (
    <section className="py-16 bg-beige/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-warm-gray mb-4">Індивідуальні послуги</h2>
          <p className="text-lg text-gray-600">Ціни на окремі медичні послуги</p>
        </div>
        
        <div className="space-y-8">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-warm-gray mb-8 pb-4 border-b-2 border-sage/20">
                {category}
              </h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between py-4 px-6 rounded-lg bg-beige/10 hover:bg-beige/20 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0 mt-3" />
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed text-lg font-medium">
                          {item.name}
                        </p>
                        {item.description && (
                          <p className="text-gray-500 text-sm mt-1">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 ml-6">
                      {item.priceUah && (
                        <div className="text-right">
                          <div className="text-xl font-bold text-coffee">
                            {item.priceUah} грн
                          </div>
                        </div>
                      )}
                      <Link
                        href="/contact"
                        className="bg-sage text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors text-sm whitespace-nowrap"
                      >
                        Записатися
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}