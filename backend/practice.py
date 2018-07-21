from flask import Flask
from pymongo import MongoClient
import os
import json #user정보를 json으로 바꿔서 보내준다


app = Flask(__name__)
app.config['DEBUG'] = 'on' #코드고치면 재구동돼서 바꾼코드가 바로 적용

connection = MongoClient(os.environ['MONGO_DB_URI'])
db = connection['test']
#res = db.secondCollection.find()
# print(res[0]['name'])

@app.route('/api/users') 
def read():
    userList = []
    users = db.secondCollection.find()
    
    for user in users:
        userList.append({'name':user['name'], 'age':user['age']})

        response = app.response_class(
            response = json.dumps(userList),
            status = 200,
            mimetype='application/json'
        )

    return response


    # return json.dumps(userList) #json은 문자열이다
    # return userList #TypeError: 'list' object is not callable

@app.route('/create/<name>/<age>')
def create(name,age):
    db.secondCollection.insert({
        'name' : name,
        'age' : age
    })
    return 'created!'



if __name__ == '__main__':
    app.run()