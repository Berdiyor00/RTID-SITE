import React, { useState } from 'react';
import '../styles/Contacts.css';
import { API_ENDPOINTS } from '../config/api';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Serverga ma'lumotlarni yuborish
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'RTID Website Contact Form'
        })
      });

      if (response.ok) {
        await response.json();
        setSubmitMessage('✅ Murojaatingiz yuborildi. Tez orada siz bilan bog\'lanamiz.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Server xatosi');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitMessage('❌ Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring yoki telefon orqali bog\'laning.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Telefon',
      value: '+998 99 666 88 66 '
    },
    {
      icon: '📧',
      title: 'Elektron pochta',
      value: 'rtid.uz@gmail.com'
    },
    {
      icon: '🕐',
      title: 'Ish vaqti',
      value: 'Dushanba - Juma: 8:00 - 20:00'
    },
    {
      icon: '📍',
      title: 'Manzil',
      value: "Qashqadaryo viloyati Koson tumani Uch qirra Madaniyat markazi 2-qavati, Mo'ljal Yoshlar bog'i RTID ofisi"
    }
  ];

  return (
    <section id="contacts" className="contacts">
      <div className="container">
        <div className="section-header">
          <h2>Biz bilan Bog'laning</h2>
          <p>Sizning savollaringizni va takliflaringizni kutamiz</p>
        </div>

        <div className="contacts-content">
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <div key={index} className="info-card">
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.value}</p>
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Ismingiz"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email manzilingiz"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Telefon raqamingiz"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Mavzu"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sizning xabaringiz"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? '⏳ Yuborilmoqda...' : 'Yuborish'}
            </button>

            {submitMessage && (
              <div className={`submit-message ${submitMessage.includes('✅') ? 'success' : 'error'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="social-links">
        <a href="#facebook" className="social-btn"><img className="social-btn-design" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/3840px-2023_Facebook_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="Facebook" /></a>
        <a href="#twitter" className="social-btn"><img className="social-btn-design" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/3840px-Logo_of_Twitter.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="Twitter" /></a>
        <a href="https://www.instagram.com/rtid.uz" className="social-btn"><img className="social-btn-design" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/3840px-Instagram_logo_2016.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="Instagram" /></a>
        <a href="#linkedin" className="social-btn"><img className="social-btn-design" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/3840px-LinkedIn_icon.svg.png" alt="LinkedIn" /></a>
      </div>
    </section>
  );
}

export default Contacts;
