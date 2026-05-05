# RTID Deployment Guide

## 🚀 ahost.cloud ga Joylash

### 1. Frontend Deployment

```bash
# Build yaratish
npm run build

# Build papkasini zip qilish
# build.zip faylini ahost.cloud File Manager'ga yuklash
# public_html papkasiga extract qilish
```

### 2. Backend Deployment

```bash
# Backend papkasini server'ga yuklash
# SSH orqali server'ga kirish

cd backend
npm install --production

# PM2 bilan ishga tushirish (recommended)
npm install -g pm2
pm2 start server.js --name "rtid-crm"
pm2 save
pm2 startup
```

### 3. Environment Variables

**backend/.env faylini server'da yarating:**

```env
PORT=5000
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
EMAIL_USER=noreply@rtid.uz
EMAIL_PASS=your-email-password
ADMIN_EMAIL=admin@rtid.uz
NODE_ENV=production
```

### 4. Domain Configuration

**ahost.cloud cPanel'da:**

1. **Subdomain yaratish:** `api.rtid.uz`
2. **Document Root:** `/home/username/backend`
3. **SSL Certificate:** AutoSSL yoqish

### 5. Database (ixtiyoriy)

Agar ma'lumotlarni saqlash kerak bo'lsa:

```bash
# MongoDB yoki MySQL qo'shish
npm install mongoose # MongoDB uchun
# yoki
npm install mysql2   # MySQL uchun
```

### 6. Cron Jobs (Email notifications)

**cPanel > Cron Jobs:**

```bash
# Har 5 daqiqada yangi leads'ni tekshirish
*/5 * * * * curl -X GET https://api.rtid.uz/api/crm/stats
```

## 🔧 Troubleshooting

### Port Conflicts
```bash
# PM2 processes ko'rish
pm2 list

# Process o'chirish
pm2 delete rtid-crm

# Log ko'rish
pm2 logs rtid-crm
```

### CORS Issues
```javascript
// server.js da CORS ni sozlash
app.use(cors({
  origin: ['https://rtid.uz', 'https://www.rtid.uz'],
  credentials: true
}));
```

### Email Issues
```bash
# Email sozlamalarini tekshirish
node -e "console.log(require('nodemailer').createTransport({...}))"
```

## 📊 Monitoring

### PM2 Monitoring
```bash
pm2 monit
```

### Server Logs
```bash
pm2 logs rtid-crm --lines 100
```

### Health Check
```bash
curl https://api.rtid.uz/api/health
```

## 🔒 Security Checklist

- [ ] SSL certificate o'rnatildi
- [ ] Environment variables xavfsiz
- [ ] Rate limiting ishlaydi
- [ ] CORS to'g'ri sozlandi
- [ ] Firewall rules
- [ ] Regular backups
- [ ] Password security

## 📞 Support

Muammo bo'lsa:
1. PM2 logs'ni tekshiring
2. Server error logs'ni ko'ring
3. Network connectivity test qiling
4. ahost.cloud support'ga murojaat qiling