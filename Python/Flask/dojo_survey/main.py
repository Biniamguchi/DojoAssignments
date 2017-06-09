from flask import Flask,render_template,request,redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/process",methods=["POST"])
def process():
    nm   = request.form["name"]
    loc  = request.form["loc"]
    lang = request.form["lang"]
    com  = request.form["comment"]

    return render_template("results.html",nm=nm,loc=loc,lang=lang,com=com)
app.run()