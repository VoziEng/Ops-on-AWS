from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
import pymysql
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Database connection credentials
HOST = '127.0.0.1'
USER = 'root'
PASSWORD = 'Amrutha@2901'
DB = 'login_data'

# Connect to the MySQL database
db = mysql.connector.connect(
    host=HOST,
    user=USER,
    password=PASSWORD,
    database=DB
)

cursor = db.cursor()

# Connect to the database with pymysql (for JSON data)
def get_db_connection():
    return pymysql.connect(host=HOST, user=USER, password=PASSWORD, db=DB, cursorclass=pymysql.cursors.DictCursor)

# Route for the signup page
@app.route('/signup', methods=['POST'])
def signup():
    name = request.form['name']
    email = request.form['email']
    password = request.form['password']

    # Insert user data into the database
    cursor.execute("INSERT INTO users (name, email, password) VALUES (%s, %s, %s)", (name, email, password))
    db.commit()

    return redirect(url_for('index'))

# Route for the login page
@app.route('/login', methods=['GET'])
def login():
    email = request.args.get('email')
    password = request.args.get('password')

    # Check if user credentials are valid
    cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()

    if user:
        return redirect(url_for('dashboard'))
    else:
        return redirect(url_for('index'))

# Route for the dashboard
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

# Other routes
@app.route('/driver')
def driver():
    return render_template('drivers.html')

@app.route('/vehicles')
def vehicles():
    return render_template('vehicles.html')

@app.route('/performance')
def performance():
    return render_template('performance.html')

@app.route('/livemap')
def livemap():
    return render_template('livemap.html')

# Route for the index page
@app.route('/')
def index():
    return render_template('login.html')

# API route to get vehicle data
@app.route('/vehicles_data')
def vehicles_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute('SELECT * FROM vehicle_info')
        data = cursor.fetchall()
        return jsonify(data)
    finally:
        cursor.close()
        conn.close()

# New API route to get driver data
@app.route('/drivers_data')
def drivers_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute('SELECT * FROM driver_info')  # Using the correct table name
        data = cursor.fetchall()
        return jsonify(data)
    finally:
        cursor.close()
        conn.close()

# API route to get performance data
@app.route('/performance_data')
def performance_data():
    conn = get_db_connection()
    cursor = conn.cursor()
    
    try:
        cursor.execute('SELECT * FROM performance_info')
        data = cursor.fetchall()
        return jsonify(data)
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)

