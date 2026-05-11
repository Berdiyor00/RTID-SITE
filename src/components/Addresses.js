import React, { useState } from 'react';
import '../styles/Addresses.css';

function Addresses() {
  const [activeAddress, setActiveAddress] = useState(0);

  const addresses = [
    {
      id: 1,
      city: 'RTID Ofisi',
      address: 'Qashqadaryo viloyati Koson tumani Yoshlar bog\'i ro\'parasida, RTID ofisi',
      phone: '+998 99 666 88 66',
      email: 'rtid.uz@gmail.com',
      hours: 'Dushanba - Juma: 8:00 - 20:00',
      latitude: 39.04327941064052,
      longitude: 65.5856784014394
    },
    {
      id: 2,
      city: 'Uch qirra',
      address: 'Qashqadaryo viloyati Koson tumani Uch qirra Madaniyat markazi 2-qavatida',
      phone: '+998 99 666 88 66',
      email: 'rtid.uz@gmail.com',
      hours: 'Dushanba - Juma: 8:00 - 20:00',
      latitude: 39.04327941064052,
      longitude: 65.5856784014394
    },
    {
      id: 3,
      city: 'Kellej',
      address: 'Qashqadaryo viloyati Koson tumani 1-sonli kasb hunar texnikumi',
      phone: '+998 99 666 88 66',
      email: 'rtid.uz@gmail.com',
      hours: 'Dushanba - Juma: 8:00 - 20:00',
      latitude: 39.03084315661132,
      longitude: 65.61275081114512
    }
  ];

  return (
    <section id="addresses" className="addresses">
      <div className="container">
        <div className="section-header">
          <h2>Bizning Ofislar</h2>
          <p>Qashqadaryo viloyati bo'ylab IT xizmatlarini taqdim etamiz</p>
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
