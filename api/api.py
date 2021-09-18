from flask import Flask, jsonify, request, json
from pymongo import MongoClient
import json
import os
from bson import json_util


app = Flask(__name__)
username=os.environ.get('MONGODB_USER')
password=os.environ.get('MONGODB_PW')
connect = 'mongodb+srv://' + username + ':'+ password + "@cluster0.refae.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
databases = MongoClient(connect)


# this route tests mongodb connection
@app.route('/api/paintings', methods=['GET'])
def get_paintings():

    paintings = databases.Paintings.alan
    arr = []
    for doc in paintings.find():        
        # print(doc)
        doc['url'] = "https://paintings-13.s3.us-east-2.amazonaws.com/" + doc['file_name']
        if 'Comment' not in doc:
            doc['Comment'] = ''
        arr.append(doc)

    
    send = json.loads(json_util.dumps(arr))
    # print(json.dumps(send, indent=4, sort_keys=True))
    
    return jsonify(data=send)

    




if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)