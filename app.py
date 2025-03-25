from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('register.html')  # Make sure this is in the templates folder

@app.route('/register', methods=['POST'])
def register():
    name = request.form.get('name')
    email = request.form.get('email')
    password = request.form.get('password')
    return f"Registration successful for {name} with email {email}"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
