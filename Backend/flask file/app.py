
import os
import cv2
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS from the flask_cors module
from tensorflow.keras.models import load_model

app = Flask(__name__)
CORS(app)

# Load the trained model
model = load_model('vgg19.h5')

# Load and preprocess an image
def preprocess_image(image_path, target_size=(224, 224)):
    image = cv2.imread(image_path)
    image = cv2.resize(image, target_size)
    image = image / 255.0  # Normalize pixel values to [0, 1]
    return np.expand_dims(image, axis=0)

@app.route('/', methods=['GET'])  # Define a new route for the root endpoint ("/")
def hello():
    return jsonify({'message': 'The endpoint is working!'})  # Return a JSON response 


@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file and allowed_file(file.filename):
        # Create the 'uploads' directory if it doesn't exist
        os.makedirs('uploads', exist_ok=True)

        file_path = os.path.join('uploads', file.filename)
        file.save(file_path)

        # Preprocess the image
        image = preprocess_image(file_path)

        # Make a prediction
        prediction = model.predict(image)

        # Interpret the prediction
        if prediction[0][0] > 0.5:
            result = "Cataract"
        else:
            result = "Normal"

        return jsonify({'prediction': result, 'predicted_probability': float(prediction[0][0])})

    return jsonify({'error': 'Invalid file format'})

# Helper function to check allowed file extensions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in {'jpg', 'jpeg', 'png'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))