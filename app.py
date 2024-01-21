# app.py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, CI/CD with Flask and GitHub Actions!'

if __name__ == '__main__':
    app.run(debug=True)
