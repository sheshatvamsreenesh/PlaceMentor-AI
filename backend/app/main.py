from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
@app.route("/")
def home():
    return "PlaceMentor AI backend is running!"
@app.route("/api/test")
def test_api():
    return jsonify({
        "message": "Frontend successfully connected to PlaceMentor AI backend!"
    })
if __name__ == "__main__":
    app.run(debug=True, port=5001)