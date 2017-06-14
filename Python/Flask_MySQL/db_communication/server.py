from flask import Flask,render_template,session,flash,redirect,request
from mysqlconnection import MySQLConnector

app   = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM friends;")
    print friends
    return render_template('index.html',friends=friends)

@app.route('/friends',methods=['POST'])
def create():
    return redirect('/')
app.run(debug=True)