# Event Registration 2025 - Google Sheets Setup Instructions

## Step 1: Create Google Sheet
1. Go to https://sheets.google.com
2. Create a new sheet
3. Name it "Event Registration 2025"
4. Copy the Sheet ID from the URL (long string between `/d/` and `/edit`)

## Step 2: Setup Google Apps Script
1. Go to https://script.google.com
2. Click "New Project"
3. Delete the default code
4. Copy and paste the code from `google-sheets-script.js`
5. Replace `YOUR_GOOGLE_SHEET_ID_HERE` with your actual sheet ID
6. Save the project (name it "Event Registration API")

## Step 3: Deploy as Web App
1. Click "Deploy" → "New Deployment"
2. Choose type: "Web app"
3. Description: "Event Registration 2025 API"
4. Execute as: "Me"
5. Who has access: "Anyone"
6. Click "Deploy"
7. Copy the Web App URL

## Step 4: Update Registration Form
1. Open `registration-form.html`
2. Find the line: `const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';`
3. Replace `YOUR_SCRIPT_ID` with your actual script ID from the Web App URL

## Step 5: Test the Integration
1. Open your registration form
2. Fill out the form with test data
3. Upload test images
4. Submit the form
5. Check your Google Sheet - the data should appear automatically

## Features:
✅ **Automatic data collection** - All form data saved to Google Sheets
✅ **File upload tracking** - File names and upload status recorded
✅ **Timestamp logging** - Indian Standard Time timestamps
✅ **Error handling** - Fallback to localStorage if Google Sheets fails
✅ **Auto-formatting** - Headers and styling applied automatically

## Troubleshooting:
- If data doesn't appear, check the Apps Script execution logs
- Make sure the sheet permissions allow the script to write
- Verify the Web App URL is correct in the registration form
- Check browser console for any JavaScript errors

## Data Structure:
The Google Sheet will contain these columns:
- Timestamp
- Email
- Participant Name
- College Name
- Department Name
- Contact Number
- Student Email
- Event Type
- On Stage Type
- Off Stage Type
- Off Stage Event
- Event Participant Name
- Event Contact Number
- GPay Reference
- Student ID File
- Payment File
- Submission Time
