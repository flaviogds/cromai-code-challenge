from flask import Flask
from flask_restx import Api

class Server():
    def __init__(self, ):
        self.app = Flask(__name__)
        self.api = Api(
            self.app,
            version = '0.1.0',
            title = 'pythagorean-api',
            description = 'API to calculate the Pythagorean theorem',
            doc = '/docs'
        )

    def run(self, ):
        self.app.run(
            debug = True
        )

server = Server()