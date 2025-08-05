// Google Apps Script for Event Registration Form 2025
// Deploy this as a Web App to receive form submissions

function doPost(e) {
  try {
    // Get the data from the request
    const data = JSON.parse(e.postData.contents);
    
    // Open the Google Sheet (replace with your sheet ID)
    const sheetId = 'YOUR_GOOGLE_SHEET_ID_HERE';
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Check if headers exist, if not create them
    if (sheet.getLastRow() === 0) {
      const headers = [
        'Timestamp',
        'Email',
        'Participant Name',
        'College Name',
        'Department Name',
        'Contact Number',
        'Student Email',
        'Event Type',
        'On Stage Type',
        'Off Stage Type',
        'Off Stage Event',
        'Event Participant Name',
        'Event Contact Number',
        'GPay Reference',
        'Student ID File',
        'Payment File',
        'Submission Time'
      ];
      sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
      
      // Format header row
      sheet.getRange(1, 1, 1, headers.length)
        .setBackground('#FFD700')
        .setFontWeight('bold')
        .setFontColor('#000000');
    }
    
    // Prepare row data
    const rowData = [
      data.timestamp || new Date().toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'}),
      data.email || '',
      data.participantName || '',
      data.collegeName || '',
      data.departmentName || '',
      data.contactNumber || '',
      data.studentEmail || '',
      data.eventType || '',
      data.onStageType || '',
      data.offStageType || '',
      data.offStageEvent || '',
      data.eventParticipantName || '',
      data.eventContactNumber || '',
      data.gpayReference || '',
      data.studentIdFileName || '',
      data.paymentFileName || '',
      data.submissionTime || ''
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, rowData.length);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({success: true, message: 'Data saved successfully'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({success: false, error: error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({status: 'Event Registration 2025 API is running'}))
    .setMimeType(ContentService.MimeType.JSON);
}
