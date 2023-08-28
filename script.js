document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const responseMessage = document.getElementById('responseMessage');

    uploadButton.addEventListener('click', async () => {
        const file = fileInput.files[0];
        if (!file) {
            responseMessage.textContent = 'Please select a file.';
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                responseMessage.textContent = 'File uploaded successfully.';
            } else {
                const data = await response.json();
                responseMessage.textContent = data.error || 'Error uploading file.';
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            responseMessage.textContent = 'An error occurred while uploading the file.';
        }

            const fileList = document.getElementById('fileList');
        
            async function fetchFileList() {
                try {
                    const response = await fetch('/file-list');
                    const data = await response.json();
        
                    if (response.ok) {
                        fileList.innerHTML = '';
                        data.files.forEach(file => {
                            const listItem = document.createElement('li');
                            listItem.textContent = `File: ${file.filename}, Size: ${file.size} bytes, Uploaded At: ${file.uploaded_at}`;
                            fileList.appendChild(listItem);
                        });
                    }
                } catch (error) {
                    console.error('Error fetching file list:', error);
                }
            }
        
            fetchFileList(); // Fetch the file list when the page loads
        });
    });





