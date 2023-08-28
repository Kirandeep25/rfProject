from flask import Flask, request, jsonify, render_template
import os
from datetime import datetime

app = Flask(__name__)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        filename = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filename)
        return jsonify({'message': 'File uploaded successfully'})
   
@app.route('/file-list', methods=['GET'])
def get_file_list():
    filenames = os.listdir(app.config['UPLOAD_FOLDER'])
    file_info_list = []

    for filename in filenames:
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file_info = {
            'filename': filename,
            'size': os.path.getsize(file_path),
            'uploaded_at': datetime.fromtimestamp(os.path.getmtime(file_path)).strftime('%Y-%m-%d %H:%M:%S')
        }
        file_info_list.append(file_info)

    return jsonify({'files': file_info_list})
if __name__ == '__main__':
    app.run(debug=True)


