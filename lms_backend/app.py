from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Connect to MongoDB Atlas
client = MongoClient(
    'mongodb+srv://kagiso:ziFWoCrK62lBuGQ0@lms.9nfsf.mongodb.net/?retryWrites=true&w=majority&appName=lms'
)
db = client['lms_db']  # Create a database called 'lms_db'
students_collection = db['students']  # Create a collection for students

# Add a new student
@app.route('/add_student', methods=['POST'])
def add_student():
    try:
        data = request.json

        # Validate input data
        if not data or 'name' not in data or 'email' not in data:
            return jsonify({'error': 'Invalid input! Name and email are required.'}), 400

        # Create a new student document
        new_student = {
            'name': data['name'],
            'email': data['email']
        }

        # Insert the new student into the collection
        students_collection.insert_one(new_student)
        return jsonify({'message': 'Student added successfully!'}), 201

    except Exception as e:
        print(f"Error: {e}")  # Log the error to the console
        return jsonify({'error': 'An error occurred while adding the student.'}), 500

# Get all students
@app.route('/students', methods=['GET'])
def get_students():
    try:
        students = list(students_collection.find())
        for student in students:
            student['_id'] = str(student['_id'])  # Convert _id from ObjectId to string
        return jsonify(students), 200
    except Exception as e:
        print(f"Error: {e}")  # Log the error to the console
        return jsonify({'error': 'An error occurred while retrieving students.'}), 500

if __name__ == '__main__':
    app.run(debug=True)
