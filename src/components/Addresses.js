import React, { useState } from 'react';
import '../styles/Addresses.css';

function Addresses() {
  const [activeAddress, setActiveAddress] = useState(0);

  const addresses = [
    {
      id: 1,
      city: 'Toshkent',
      address: 'Qashqadaryo viloyati Koson tumani Uch qirra  Mo\'ljal Yoshlar bog\'i ro\'parasida, RTID ofisi',
      phone: '+998 99 666 88 66',
      email: 'rtid.uz@gmail.com',
      hours: 'Dushanba - Juma: 9:00 - 18:00',
      latitude: 41.2995,
      longitude: 69.2401
    },
    {
      id: 2,
      city: 'Samarqand',
      address: 'Qashqadaryo viloyati Koson tumani Uch qirra  Mo\'ljal Yoshlar bog\'i, RTID ofisi',
      phone: '+998 99 666 88 66',
      email: 'rtid.uz@gmail.com',
      hours: 'Dushanba - Juma: 9:00 - 17:00',
      latitude: 39.6548,
      longitude: 66.9597
    },
    {
      id: 3,
      city: 'Buxoro',
      address: '789 Digital Hub, Ark ko\'chasi, Buxoro',
      phone: '+998 65 225 00 88',
      email: 'bukhara@rtid.uz',
      hours: 'Dushanba - Juma: 9:00 - 17:00',
      latitude: 39.7747,
      longitude: 64.4161
    }
  ];

  return (
    <section id="addresses" className="addresses">
      <div className="container">
        <div className="section-header">
          <h2>Bizning Ofislar</h2>
          <p>Butun davlat bo'ylab IT xizmatlarini taqdim etamiz</p>
        </div>

        <div className="addresses-grid">
          <div className="addresses-list">
            {addresses.map((address, index) => (
              <div
                key={address.id}
                className={`address-item ${activeAddress === index ? 'active' : ''}`}
                onClick={() => setActiveAddress(index)}
              >
                <div className="address-item-header">
                  <h3>{address.city}</h3>
                  <span className="address-indicator">▶</span>
                </div>
                <p className="address-text">{address.address}</p>
              </div>
            ))}
          </div>

          <div className="address-details">
            <div className="detail-card">
              <h3 className="detail-title">{addresses[activeAddress].city}</h3>
              
              <div className="detail-section">
                <h4>📍 Manzil</h4>
                <p>{addresses[activeAddress].address}</p>
              </div>

              <div className="detail-section">
                <h4>📞 Telefon</h4>
                <a href={`tel:${addresses[activeAddress].phone}`}>{addresses[activeAddress].phone}</a>
              </div>

              <div className="detail-section">
                <h4>📧 Elektron pochta</h4>
                <a href={`mailto:${addresses[activeAddress].email}`}>{addresses[activeAddress].email}</a>
              </div>

              <div className="detail-section">
                <h4>🕐 Ish vaqti</h4>
                <p>{addresses[activeAddress].hours}</p>
              </div>

              <button className="btn btn-primary contact-btn">Joyga borish</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Addresses;
