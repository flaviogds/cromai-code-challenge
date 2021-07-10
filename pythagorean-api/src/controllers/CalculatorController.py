from flask import Flask
from flask_restx import Api, Resource

from src.server.instance import server
from src.service.CalculatorService import CalculatorService

app, api = server.app, server.api

@api.route('/calculator')
class Calculator(Resource):
    def post(self, ):
        print(api.payload)
        return  CalculatorService(api.payload).service()