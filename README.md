# 🎉 Event Registration Template 2025

A complete, professional event registration system with file uploads, Google Sheets integration, and admin dashboard. Perfect for college fests, conferences, workshops, and any event requiring participant registration.

## ✨ Features

### 🎯 **For Participants:**
- ✅ Beautiful, responsive registration form
- ✅ File upload support (ID cards, payment proofs)
- ✅ Real-time form validation
- ✅ Multiple event types (On-stage/Off-stage, Solo/Group)
- ✅ Payment integration ready
- ✅ Mobile-friendly design
- ✅ Auto-redirect after submission

### 👨‍💼 **For Organizers:**
- ✅ Google Sheets integration (automatic data collection)
- ✅ File manager with preview and download
- ✅ Admin dashboard with statistics
- ✅ CSV export functionality
- ✅ Debug tools for troubleshooting
- ✅ GitHub Pages hosting (FREE)

### 🛠️ **Technical Features:**
- ✅ Pure HTML/CSS/JavaScript (no frameworks)
- ✅ Git LFS for large file storage
- ✅ localStorage fallback
- ✅ Client-side file handling
- ✅ Error handling and validation
- ✅ Professional dark theme design

## 🚀 Quick Start

### 1. **Fork & Clone**
```bash
git clone https://github.com/YOUR-USERNAME/event-registration-template
cd event-registration-template
```

### 2. **Customize Your Event**
Edit these files with your event details:

**`index.html`:**
- Change event name, tagline, and date
- Update contact information
- Replace logos with your event branding

**`registration-form.html`:**
- Update event name and venue details
- Modify registration fee amount
- Customize event categories and options

### 3. **Setup Google Sheets (Optional)**
Follow the detailed instructions in `GOOGLE_SHEETS_SETUP.md` to automatically collect form data in Google Sheets.

### 4. **Deploy to GitHub Pages**
1. Go to your repository settings
2. Enable GitHub Pages from the `main` branch
3. Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME`

## 📁 File Structure

```
├── index.html              # Main landing page
├── registration-form.html  # Registration form
├── file-manager.html      # Admin file manager
├── admin-files.html       # Admin dashboard
├── debug-storage.html     # Debug tools
├── upload-handler.js      # File upload system
├── google-sheets-script.js # Google Apps Script
├── GOOGLE_SHEETS_SETUP.md # Setup instructions
├── uploads/               # File storage directory
│   ├── student-ids/       # Student ID uploads
│   └── payment-proofs/    # Payment proof uploads
└── assets/                # Images and logos
```

## 🎨 Customization Guide

### **Colors & Branding**
- Primary color: `#FFD700` (Gold)
- Background: Dark gradient
- Update CSS variables in each HTML file for consistent theming

### **Form Fields**
Easily modify form fields in `registration-form.html`:
- Add/remove input fields
- Change validation rules
- Update event categories
- Modify payment amounts

### **Event Types**
Current setup supports:
- On-stage events (Solo/Group)
- Off-stage events (Solo/Group)
- Custom event categories

## 💾 Data Storage Options

### **1. Browser Storage (Default)**
- Files stored in browser's localStorage
- No server required
- Perfect for testing and small events

### **2. Google Sheets Integration**
- Automatic data collection
- Real-time access to submissions
- Export to CSV/Excel
- FREE with Google account

### **3. GitHub Pages + Git LFS**
- 1GB+ free file storage
- Version control for uploads
- Professional hosting solution

## 🛡️ Security & Privacy

- ✅ Client-side processing (no server vulnerabilities)
- ✅ No sensitive data exposure
- ✅ HTTPS by default with GitHub Pages
- ✅ Configurable data retention
- ✅ GDPR-friendly design

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📞 Support

If you encounter any issues or need help customizing:

1. Check the `debug-storage.html` page for troubleshooting
2. Review `GOOGLE_SHEETS_SETUP.md` for integration help
3. Open an issue on GitHub
4. Check the file manager for uploaded content

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Acknowledgments

- Built for educational institutions and event organizers
- Designed with accessibility and usability in mind
- Optimized for GitHub Pages hosting
- Professional-grade form validation and error handling

---

### 🎯 Perfect For:
- College/University fests
- Technical conferences
- Cultural events
- Workshops and seminars
- Competition registrations
- Community gatherings

**Make your event registration professional and hassle-free!** 🚀

---

*Last updated: August 2025*
