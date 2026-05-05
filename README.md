# RTID - Axborot Texnologiyalari Sayti

Zamonaviy animasiyali dizayn bilan yaratilgan IT xizmatlar sayti va CRM tizimi.

## 🚀 Xususiyatlari

✨ **Zamonaviy Dizayn**
- Gradient orqali jozibali ranglar
- Harakatsiz animasiyalar
- Responsive design

🎨 **Komponentlar**
- Header (navigatsiya)
- Hero section (bosh sahifa)
- Services (xizmatlar)
- Addresses (manzillar)
- Contacts (bog'lanish formasi)
- Footer (pastki qism)

📊 **CRM Tizimi**
- Contact form submissions
- Lead management
- Email notifications
- Admin dashboard

## 🛠 Texnologiyalar

### Frontend
- React 18
- CSS3 (Animations, Gradients, Flexbox, Grid)
- JavaScript ES6+

### Backend
- Node.js + Express
- Nodemailer (email notifications)
- CORS enabled
- Rate limiting
- Helmet security

## 📁 Fayllar Tuzilishi

```
RTID-SITE/
├── src/
│   ├── components/
│   ├── styles/
│   ├── config/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
├── public/
└── package.json
```

## 🚀 O'rnatish va Ishga Tushirish

### Frontend
```bash
npm install
npm start
```

### Backend
```bash
cd backend
npm install
npm start
```

## 🌐 Deployment (ahost.cloud)

### 1. Frontend
```bash
npm run build
# Build papkasini hosting'ga yuklang
```

### 2. Backend
```bash
# Backend papkasini server'ga yuklang
cd backend
npm install --production
npm start
```

### 3. Environment Variables
Backend uchun `.env` faylini sozlang:
```
SMTP_HOST=your-smtp-host
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password
ADMIN_EMAIL=admin@rtid.uz
```

## 📊 CRM API Endpoints

- `POST /api/crm/contact` - Contact form submission
- `GET /api/crm/leads` - Get all leads (admin)
- `GET /api/crm/stats` - Get CRM statistics
- `GET /api/health` - Health check

## 📧 Email Notifications

Formadan kelgan murojaatlar avtomatik email orqali yuboriladi.

## 🔒 Security

- Rate limiting
- CORS protection
- Helmet security headers
- Input validation

## 📱 Mobil-friendly

- Toqima responsive dizayn
- Mobile menu implemented
- Butun ekranlarda mosalik

## 🎯 Ishlatish

1. Frontend: `http://localhost:3000`
2. Backend: `http://localhost:5000`
3. CRM Dashboard: `http://localhost:5000/api/crm/stats`

## 📞 Contact Form

Formadan kelgan ma'lumotlar:
- Ism, email, telefon
- Mavzu va xabar
- Timestamp va manba
- Avtomatik email notification

## 🏆 Mualliflik

Created with ❤️ for RTID Technology

## 📄 Litsenziya

MIT

## Fayllar Tuzilishi

```
src/
├── components/
│   ├── Header.js
│   ├── Hero.js
│   ├── Services.js
│   ├── Addresses.js
│   ├── Contacts.js
│   └── Footer.js
├── styles/
│   ├── Header.css
│   ├── Hero.css
│   ├── Services.css
│   ├── Addresses.css
│   ├── Contacts.css
│   └── Footer.css
├── App.js
├── App.css
├── index.js
└── index.css
public/
└── index.html
```

## Manzillar

1. **Toshkent** - 123 IT Park, Mirzo Ulugbek ko'chasi
2. **Samarqand** - 456 Tech Center, Registan ko'chasi
3. **Buxoro** - 789 Digital Hub, Ark ko'chasi

## Xizmatlar

- 🖥️ Web Dизайн
- 📱 Mobil Ilovalari
- ☁️ Bulutli Xizmatlar
- 🔒 Xavfsizlik
- ⚙️ IT Konsultasiya
- 📊 Analitika

## Amaliy ko'rinish

Shampolevari animasiyalari va gradient ranglar:
- Particle animasiyalar
- Scroll indikatori
- Hover effektlari
- Form validatsiyasi
- Social media linkalari

## Mualliflik

Created with ❤️ for RTID Technology

## Litsenziya

MIT
