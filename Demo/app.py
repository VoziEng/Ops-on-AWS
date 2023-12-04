from flask import Flask, render_template, request, redirect, url_for
import mysql.connector

app = Flask(__name__)

# Configure your MySQL connection
db = mysql.connector.connect(
    host="127.0.0.1",
    user="root",
    password="Amrutha@2901",
    database="login_data"
)

cursor = db.cursor()

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

    # Check if user credentials are valid (a simple example)
    cursor.execute("SELECT * FROM users WHERE email = %s AND password = %s", (email, password))
    user = cursor.fetchone()

    if user:
        # Credentials are valid, redirect to the dashboard
        return redirect(url_for('dashboard'))
    else:
        # Credentials are not valid, handle accordingly
        return redirect(url_for('index'))

# Route for the dashboard
@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

# Route for the Driver page
@app.route('/driver')
def driver():
    return render_template('drivers.html')

@app.route('/vehicles')
def vehicles():
    return render_template('vehicles.html')

# Route for the index page
@app.route('/')
def index():
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)
