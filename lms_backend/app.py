from flask import Flask, jsonify, request
from pymongo import MongoClient

app = Flask(__name__)

# Connect to MongoDB Atlas
client = MongoClient('mongodb+srv://kagiso:ziFWoCrK62lBuGQ0@lms.9nfsf.mongodb.net/?retryWrites=true&w=majority&appName=lms')
db = client['lms_db']  # Create a database called 'lms_db'
students_collection = db['students']  # Create a collection for students

# Add a new student
@app.route('/add_student', methods=['POST'])
def add_student():
    data = request.json
    new_student = {
        'name': data['name'],
        'email': data['email']
    }
    students_collection.insert_one(new_student)
    return jsonify({'message': 'Student added successfully!'}), 201

# Get all students
@app.route('/students', methods=['GET'])
def get_students():
    students = list(students_collection.find())
    for student in students:
        student['_id'] = str(student['_id'])  # Convert _id from ObjectId to string
    return jsonify(students), 200

if __name__ == '__main__':
    app.run(debug=True)
