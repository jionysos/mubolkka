from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

connection = MongoClient('mongodb://localhost:27017/')
db = connection['test']
res = db.secondCollection.find()
# print(res[0]['name'])

@app.route('/')
def hello():
    return res[0]['name']

if __name__ == '__main__':
    app.run()