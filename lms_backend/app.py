from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from React frontend

# Connect to MongoDB Atlas
client = MongoClient('mongodb+srv://kagiso:%23Tech25@lms.z9w2m.mongodb.net/?retryWrites=true&w=majority&appName=lms')
db = client['lms']  # This is our database
students_collection = db['students']  # This is our collection

@app.route('/students', methods=['POST'])
def add_student():
    student = request.json
    students_collection.insert_one(student)  # Insert student data
    return jsonify(message="Student added successfully!"), 201

@app.route('/students', methods=['GET'])
def get_students():
    students = list(students_collection.find({}, {'_id': False}))
    return jsonify(students=students), 200

if __name__ == '__main__':
    app.run(debug=True)
