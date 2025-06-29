import os
from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

# Load the trained model
with open('random_forest_model.pkl', 'rb') as f:
    model = pickle.load(f)

# Initialize Flask app
app = Flask(__name__)

# Configure CORS - allow multiple origins
CORS(app, origins=[
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "https://*.vercel.app"
], supports_credentials=True)

@app.route('/', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy', 'message': 'Model server is running'})

@app.route('/predict', methods=['POST', 'OPTIONS'])
def predict():
    if request.method == 'OPTIONS':
        return jsonify({'status': 'ok'})
        
    try:
        # Get JSON data from the request
        data = request.json
        df = pd.DataFrame([data])  # Wrap input as DataFrame
        
        # Make prediction
        prediction = model.predict(df)
        
        # Return the result
        return jsonify({'prediction': int(prediction[0])})
        
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)