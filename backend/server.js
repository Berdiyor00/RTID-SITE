const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://de.ahost.cloud', 'https://rtid.uz', 'https://www.rtid.uz'],
  credentials: true
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Contact form submissions storage (in production, use database)
let contactSubmissions = [];
let crmData = {
  leads: [],
  customers: [],
  inquiries: []
};

// Email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// CRM Routes
app.post('/api/crm/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message, timestamp, source } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Ism, email va xabar majburiy'
      });
    }

    const newContact = {
      id: Date.now().toString(),
      name,
      email,
      phone: phone || '',
      subject: subject || '',
      message,
      timestamp: timestamp || new Date().toISOString(),
      source: source || 'Website',
      createdAt: new Date()
    };

    contactSubmissions.push(newContact);

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || 'admin@rtid.uz',
        subject: `Yangi murojaat: ${subject || 'Bog\'lanish formasi'}`,
        html: `
          <h2>Yangi murojaat RTID saytidan</h2>
          <p><strong>Ism:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Kiritilmagan'}</p>
          <p><strong>Mavzu:</strong> ${subject || 'Kiritilmagan'}</p>
          <p><strong>Xabar:</strong></p>
          <p>${message}</p>
          <p><strong>Vaqt:</strong> ${new Date().toLocaleString('uz-UZ')}</p>
          <p><strong>Manba:</strong> ${newContact.source}</p>
        `
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
    }

    res.status(200).json({
      success: true,
      message: 'Murojaat muvaffaqiyatli qabul qilindi',
      contactId: newContact.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Server xatosi. Iltimos, qayta urinib ko\'ring.'
    });
  }
});

// Get CRM data (admin only)
app.get('/api/crm/leads', (req, res) => {
  // In production, add authentication
  res.json({
    success: true,
    data: crmData.leads
  });
});

app.get('/api/crm/stats', (req, res) => {
  const stats = {
    totalLeads: crmData.leads.length,
    newLeads: crmData.leads.filter(lead => lead.status === 'new').length,
    totalInquiries: contactSubmissions.length,
    todayLeads: crmData.leads.filter(lead => {
      const today = new Date();
      const leadDate = new Date(lead.createdAt);
      return leadDate.toDateString() === today.toDateString();
    }).length
  };

  res.json({
    success: true,
    stats
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Ichki server xatosi'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'API endpoint topilmadi'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 RTID CRM Server ${PORT} portda ishlamoqda`);
  console.log(`📊 CRM Dashboard: http://localhost:${PORT}/api/crm/stats`);
  console.log(`💼 Leads: http://localhost:${PORT}/api/crm/leads`);
});

module.exports = app;