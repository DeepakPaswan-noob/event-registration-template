# 🎨 Customization Guide

## Quick Customization Checklist

### 🏷️ **1. Event Details (Required)**

**In `index.html`:**
```html
<!-- Change these lines -->
<h1>Your Event Name 2025</h1>
<p class="tagline">Your Event Tagline</p>
<h2 class="fest-title">Your Event Type 2025</h2>

<!-- Update contact info -->
<h3>Event Coordinator 1</h3>
<p>📱 +91 XXXXX XXXXX</p>
<p>✉ coordinator1@example.com</p>
```

**In `registration-form.html`:**
```html
<!-- Update header -->
<h1>EVENT NAME 2025</h1>
<p><strong>EVENT DATE: DD MONTH YYYY</strong></p>
<p>@Your College/Institution Name, City – PIN CODE</p>

<!-- Update venues -->
<strong>ON STAGE EVENT:</strong> VENUE 1<br>
<strong>OFF STAGE EVENT:</strong> VENUE 2

<!-- Update contact numbers -->
<strong>XXXXXXXXXX</strong>
```

### 🎨 **2. Branding & Colors**

**Change Primary Color:**
Replace `#FFD700` (gold) with your brand color throughout all files.

**Update Logos:**
- Replace `logo.png` with your event logo
- Replace `AMJ-college-logo-White-150x150.png` with your organization logo
- Replace `Asset-50-1.png` with secondary logo
- Update `background.JPG` with your background image

### 💰 **3. Pricing (Optional)**

**In `registration-form.html`:**
```html
<!-- Change registration fee -->
<p style="color: #FFD700; font-weight: bold; margin-bottom: 10px;">PER PERSON ₹50</p>

<!-- Update fee description -->
If a person is willing to participate in the event, they must pay a fee of <strong>₹50</strong>
```

### 🎭 **4. Event Categories**

**Add/Modify Event Types:**
```html
<!-- In registration-form.html, update options -->
<div class="radio-item">
    <input type="radio" id="culturalEvent" name="eventType" value="cultural" required>
    <label for="culturalEvent">CULTURAL EVENT</label>
</div>
<div class="radio-item">
    <input type="radio" id="technicalEvent" name="eventType" value="technical" required>
    <label for="technicalEvent">TECHNICAL EVENT</label>
</div>
```

**Add Specific Events:**
```html
<!-- Update event options -->
<option value="dance-competition">Dance Competition</option>
<option value="coding-contest">Coding Contest</option>
<option value="photography">Photography Contest</option>
```

### 📱 **5. Form Fields**

**Add New Fields:**
```html
<!-- Add after existing fields -->
<div class="form-group">
    <label for="newField">NEW FIELD NAME <span class="required">*</span></label>
    <input type="text" id="newField" name="newField" required>
    <div class="error-message" id="newFieldError">Please enter this field</div>
</div>
```

**Update Validation:**
```javascript
// In registration-form.html, add to validateForm()
const newField = document.getElementById('newField');
if (!newField.value.trim()) {
    document.getElementById('newFieldError').style.display = 'block';
    isValid = false;
}
```

### 🌈 **6. Advanced Styling**

**Custom CSS Variables:**
```css
:root {
    --primary-color: #FFD700;      /* Your brand color */
    --secondary-color: #FFA500;    /* Accent color */
    --background-dark: #111;       /* Dark background */
    --background-light: #333;      /* Light background */
    --text-color: white;           /* Text color */
    --error-color: #ff4444;        /* Error color */
    --success-color: #4CAF50;      /* Success color */
}
```

**Update All Files:**
Replace color codes in:
- `index.html` (in `<style>` section)
- `registration-form.html` (in `<style>` section)
- `file-manager.html` (in `<style>` section)
- `admin-files.html` (in `<style>` section)

### 📊 **7. Google Sheets Integration**

**Update Column Headers:**
In `google-sheets-script.js`, modify:
```javascript
const headers = [
    'Timestamp',
    'Email',
    'Participant Name',
    'Your Custom Field 1',
    'Your Custom Field 2',
    // Add your custom fields here
];
```

**Update Data Mapping:**
In `registration-form.html`, modify `sendToGoogleSheets()`:
```javascript
const sheetData = {
    timestamp: new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
    email: data.email || '',
    participantName: data.participantName || '',
    yourCustomField1: data.yourCustomField1 || '',
    yourCustomField2: data.yourCustomField2 || '',
    // Map your form fields here
};
```

### 🎯 **8. File Upload Categories**

**Add New Upload Types:**
```html
<!-- Add new file upload -->
<div class="form-group">
    <label for="customFile">CUSTOM FILE UPLOAD <span class="required">*</span></label>
    <input type="file" id="customFile" name="customFile" accept=".jpg,.jpeg,.png,.pdf" required>
    <div id="customFileUploadStatus" class="file-info"></div>
</div>
```

**Update Upload Handler:**
```javascript
// In file upload event listener, add category
const category = this.name === 'customFile' ? 'custom-files' : 'other-category';
```

### 🎪 **9. Multi-Language Support**

**Add Language Toggle:**
```html
<!-- Add to header -->
<div class="language-selector">
    <button onclick="setLanguage('en')">English</button>
    <button onclick="setLanguage('hi')">हिंदी</button>
</div>
```

**Language Object:**
```javascript
const languages = {
    en: {
        title: "Event Registration 2025",
        subtitle: "Register for our amazing event"
    },
    hi: {
        title: "इवेंट पंजीकरण 2025",
        subtitle: "हमारे अद्भुत कार्यक्रम के लिए पंजीकरण करें"
    }
};
```

### 🔧 **10. Testing Your Changes**

**Local Testing:**
1. Open `debug-storage.html` in browser
2. Test form submission
3. Check file uploads
4. Verify data storage

**Live Testing:**
1. Deploy to GitHub Pages
2. Test on mobile devices
3. Verify Google Sheets integration
4. Check file manager functionality

## 📋 Common Customizations

### **University/College Fest:**
- Add department-wise categories
- Include hostel/day scholar options
- Add team formation features
- Include accommodation requests

### **Technical Conference:**
- Add session preferences
- Include dietary requirements
- Add workshop selections
- Include certification needs

### **Cultural Event:**
- Add performance categories
- Include equipment requirements
- Add rehearsal time slots
- Include costume/prop needs

### **Corporate Workshop:**
- Add company information fields
- Include designation/role
- Add experience level
- Include training preferences

## 🎨 Design Tips

1. **Keep it simple** - Don't overwhelm users
2. **Test on mobile** - Most users will register on phones
3. **Use consistent colors** - Stick to your brand palette
4. **Clear labels** - Make form fields self-explanatory
5. **Progress indicators** - Show users where they are in the process

## 🚀 Deployment Checklist

- [ ] Updated all event-specific information
- [ ] Tested form submission locally
- [ ] Verified file upload functionality
- [ ] Configured Google Sheets integration
- [ ] Updated contact information
- [ ] Tested on mobile devices
- [ ] Checked admin panel access
- [ ] Verified file manager works
- [ ] Updated README with your event details
- [ ] Set up GitHub Pages hosting

---

**Need help?** Check the main README.md or open an issue on GitHub!
