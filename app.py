from flask import Flask, render_template, redirect, url_for, request, session

app = Flask(__name__)
app.secret_key = "secret123"  # required for login session

# @app.route('/index')
# def home():
#     return render_template('index.html')

ENGINEER_EMAIL = "engineer@company.com"
ENGINEER_PASSWORD = "123456"

@app.route('/login', methods=["GET","POST"])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        if email == ENGINEER_EMAIL and password == ENGINEER_PASSWORD:
            session['engineer'] = email
            return redirect(url_for('dashboard'))
        else:
            return render_template('login.html', error="Invalid email or password")

    return render_template('login.html')

@app.route('/dashboard')
def dashboard():
    if 'engineer' not in session:
        return redirect(url_for('login'))

    return render_template('dashboard.html')

@app.route('/logout')
def logout():
    session.pop('engineer', None)
    return redirect(url_for('index'))


if __name__ == '__main__':
    app.run(debug=True)