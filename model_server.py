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

# Configure CORS - update this with your frontend URL when deployed
CORS(app, origins=[
    "http://localhost:3000",
    "https://your-app-name.vercel.app"  # Replace with your Vercel URL
])

@app.route('/', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

@app.route('/predict', methods=['POST'])
def predict():
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