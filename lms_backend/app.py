from flask import Flask, jsonify, request
from pymongo import MongoClient
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
CORS(app)

# Connect to MongoDB Atlas
client = MongoClient(
    'mongodb+srv://kagiso:ziFWoCrK62lBuGQ0@lms.9nfsf.mongodb.net/?retryWrites=true&w=majority&appName=lms'
)
db = client['lms_db']
students_collection = db['students']
users_collection = db['users']  # Collection for user accounts
courses_collection = db['courses']  # Collection for courses
exams_collection = db['exams']  # Collection for exams


# Register a new user
@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.json
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'error': 'Username and password are required!'}), 400

        hashed_password = generate_password_hash(data['password'])
        new_user = {
            'username': data['username'],
            'password': hashed_password
        }

        users_collection.insert_one(new_user)
        return jsonify({'message': 'User registered successfully!'}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred during registration.'}), 500


# Login a user
@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        if not data or 'username' not in data or 'password' not in data:
            return jsonify({'error': 'Username and password are required!'}), 400

        user = users_collection.find_one({'username': data['username']})
        if user and check_password_hash(user['password'], data['password']):
            return jsonify({'message': 'Login successful!'}), 200
        else:
            return jsonify({'error': 'Invalid username or password!'}), 401

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred during login.'}), 500


# Add a new student
@app.route('/add_student', methods=['POST'])
def add_student():
    try:
        data = request.json
        if not data or 'name' not in data or 'email' not in data:
            return jsonify({'error': 'Invalid input! Name and email are required.'}), 400

        new_student = {
            'name': data['name'],
            'email': data['email']
        }

        students_collection.insert_one(new_student)
        return jsonify({'message': 'Student added successfully!'}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred while adding the student.'}), 500


# Get all students
@app.route('/students', methods=['GET'])
def get_students():
    try:
        students = list(students_collection.find())
        for student in students:
            student['_id'] = str(student['_id'])
        return jsonify(students), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred while retrieving students.'}), 500


# Add a new course
@app.route('/add_course', methods=['POST'])
def add_course():
    try:
        data = request.json
        if not data or 'course_name' not in data:
            return jsonify({'error': 'Course name is required!'}), 400

        new_course = {
            'course_name': data['course_name']
        }
        courses_collection.insert_one(new_course)
        return jsonify({'message': 'Course added successfully!'}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred while adding the course.'}), 500


# Get all courses
@app.route('/courses', methods=['GET'])
def get_courses():
    try:
        courses = list(courses_collection.find())
        for course in courses:
            course['_id'] = str(course['_id'])
        return jsonify(courses), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred while retrieving courses.'}), 500


# Add a new exam
@app.route('/add_exam', methods=['POST'])
def add_exam():
    try:
        data = request.json
        if not data or 'exam_name' not in data:
            return jsonify({'error': 'Exam name is required!'}), 400

        new_exam = {
            'exam_name': data['exam_name']
        }
        exams_collection.insert_one(new_exam)
        return jsonify({'message': 'Exam added successfully!'}), 201

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred while adding the exam.'}), 500


# Get all exams
@app.route('/exams', methods=['GET'])
def get_exams():
    try:
        exams = list(exams_collection.find())
        for exam in exams:
            exam['_id'] = str(exam['_id'])
        return jsonify(exams), 200
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'An error occurred while retrieving exams.'}), 500


if __name__ == '__main__':
    app.run(debug=True)
