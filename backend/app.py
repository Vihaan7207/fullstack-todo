# Importing flask module in the project is mandatory
# An object of Flask class is our WSGI application.
from flask import Flask, jsonify
from flask_cors import CORS

# Flask constructor takes the name of 
# current module (__name__) as argument.
app = Flask(__name__)
# Enable CORS for all routes
CORS(app)

# The route() function of the Flask class is a decorator, 
# which tells the application which URL should call 
# the associated function.
@app.route('/')
# ‘/’ URL is bound with hello_world() function.
def hello_world():
    print("GET request")
    return 'Hello World'

array = [1, 2, 3, 4, 5]

@app.get('/nums')
def get_nums():
    return jsonify(array)

@app.post('/nums')
def add_num():
    array.append(len(array) + 1)
    return 'success'

# main driver function
if __name__ == '__main__':

    # run() method of Flask class runs the application 
    # on the local development server.
    app.run()