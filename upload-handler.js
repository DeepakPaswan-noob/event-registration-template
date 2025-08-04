// upload-handler.js - Simple file upload handler for GitHub Pages
// This script simulates server-side file handling using client-side storage

class GitHubPagesFileHandler {
    constructor() {
        this.uploadPath = './uploads/';
        this.maxFileSize = 5 * 1024 * 1024; // 5MB per file
        this.allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
    }

    async handleFileUpload(file, category) {
        try {
            // Validate file
            if (!this.validateFile(file)) {
                throw new Error('Invalid file type or size');
            }

            // Generate unique filename
            const timestamp = new Date().getTime();
            const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
            const fileName = `${timestamp}_${sanitizedName}`;
            
            // Convert to base64 for storage
            const base64Data = await this.fileToBase64(file);
            
            // Create file metadata
            const fileMetadata = {
                originalName: file.name,
                fileName: fileName,
                size: file.size,
                type: file.type,
                category: category,
                uploadTime: new Date().toISOString(),
                data: base64Data
            };

            // Store in localStorage (temporary solution)
            this.saveFileLocally(fileMetadata);
            
            // In a real GitHub Pages deployment, you'd use GitHub API
            // this.uploadToGitHub(fileMetadata);

            return {
                success: true,
                fileName: fileName,
                url: `${this.uploadPath}${category}/${fileName}`,
                message: 'File uploaded successfully'
            };

        } catch (error) {
            console.error('Upload error:', error);
            return {
                success: false,
                error: error.message
            };
        }
    }

    validateFile(file) {
        // Check file type
        if (!this.allowedTypes.includes(file.type)) {
            alert('Only JPG, JPEG, PNG, and PDF files are allowed');
            return false;
        }

        // Check file size
        if (file.size > this.maxFileSize) {
            alert('File size must be less than 5MB');
            return false;
        }

        return true;
    }

    fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    saveFileLocally(fileMetadata) {
        // Get existing files
        const existingFiles = JSON.parse(localStorage.getItem('githubPagesFiles') || '[]');
        
        // Add new file
        existingFiles.push(fileMetadata);
        
        // Save back to localStorage
        localStorage.setItem('githubPagesFiles', JSON.stringify(existingFiles));
        
        console.log('File saved locally:', fileMetadata.fileName);
    }

    async uploadToGitHub(fileMetadata) {
        // This would be implemented for actual GitHub API integration
        // For now, we'll simulate it
        console.log('Simulating GitHub upload for:', fileMetadata.fileName);
        
        // In real implementation, you'd use:
        // - GitHub API to create/update files
        // - Personal Access Token for authentication
        // - Base64 encoding for binary files
        
        return true;
    }

    getAllFiles() {
        return JSON.parse(localStorage.getItem('githubPagesFiles') || '[]');
    }

    getFilesByCategory(category) {
        const allFiles = this.getAllFiles();
        return allFiles.filter(file => file.category === category);
    }

    deleteFile(fileName) {
        const files = this.getAllFiles();
        const updatedFiles = files.filter(file => file.fileName !== fileName);
        localStorage.setItem('githubPagesFiles', JSON.stringify(updatedFiles));
        return true;
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GitHubPagesFileHandler;
} else {
    window.GitHubPagesFileHandler = GitHubPagesFileHandler;
}
