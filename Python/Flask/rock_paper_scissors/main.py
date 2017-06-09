from flask import Flask, render_template,request,redirect,session
import random

app = Flask(__name__)
app.secret_key = "rpc"

@app.route('/')
def index():
    session['wins']     = 0
    session['losses']   = 0
    session['ties']     = 0

    return render_template('index.html',style="static/style.css")

@app.route('/process',methods=['POST'])
def process():

    session['client']   = request.form['result']
    session['server']   = random.choice(["rock","paper","scissors"])

    cl  = session['client']
    sv  = session['server']
    res = ""

    if cl == sv:
        res = "Tie"
    elif cl == "rock":
        if sv == "paper":
            res = "Server Wins!"
        elif sv == "scissors":
            res = "You win!"
    elif cl == "paper":
        if sv == "rock":
            res = "You Win!"
        elif sv == "scissors":
            res = "Server wins!"
    elif cl == "scissors":
        if sv == "rock":
            res = "Server wins!"
        elif sv == "paper":
            res = "You win!"

    if res == "Server wins!":
        session['losses'] += 1
    elif res == "You win!":
        session['wins'] += 1
    else:
        session['ties'] += 1

    return render_template('index.html',client=cl,server=sv,result=res)

app.run(debug=True)
