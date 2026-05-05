import React from 'react';
import '../styles/Services.css';

function Services() {
  const services = [
    {
      id: 1,
      icon: '🖥️',
      title: 'Web Dизайн',
      description: 'Zamonaviy va reaksiyaviy veb-saytlar yaratish'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Mobil Ilovalari',
      description: 'iOS va Android uchun yuqori sifatli ilovalari'
    },
    {
      id: 3,
      icon: '☁️',
      title: 'Bulutli Xizmatlar',
      description: 'Xavfsiz va ishonchli bulutli yechimlar'
    },
    {
      id: 4,
      icon: '🔒',
      title: 'Xavfsizlik',
      description: 'Malumotlarni xavfsizlik bilan himoya qilish'
    },
    {
      id: 5,
      icon: '⚙️',
      title: 'IT Konsultasiya',
      description: 'Professional IT maslahat va tavsiyalar'
    },
    {
      id: 6,
      icon: '📊',
      title: 'Analitika',
      description: 'Batafsil ma\'lumot tahlili va statistika'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Bizning Xizmatlar</h2>
          <p>Biz sifatli IT xizmatlarni taqdim etamiz</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card card-${index}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
