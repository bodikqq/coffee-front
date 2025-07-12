'use client';

import React, { useEffect, useState } from 'react';

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

export default function ServicesList() {
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

  if (loading) return <p>Завантаження...</p>;
  if (error) return <p className="text-red-500">Помилка: {error}</p>;

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
            <div key={category} className="bg-white rounded-xl shadow-sm p-8">
              <h2 className="text-2xl font-bold text-warm-gray mb-8 pb-4 border-b-2 border-sage/20">
                {category}
              </h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-start space-x-4 py-3 px-4 rounded-lg bg-beige/10 hover:bg-beige/20 transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-sage rounded-full flex-shrink-0 mt-3" />
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.name}
                    </p>
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
