from flask import Flask
from flask_restx import Api, Resource

from src.server.instance import server

app, api = server.app, server.api

@api.route('/status')
class Status(Resource):
    def get(self, ):
        return "It's alive!!", 200