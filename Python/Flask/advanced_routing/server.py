from flask import Flask,render_template,request,redirect
app = Flask(__name__)
@app.route("/users/<username>/<id>")
def showProfile(username,id):
    print username,id
    return render_template('user.html')

app.run(debug=True)
