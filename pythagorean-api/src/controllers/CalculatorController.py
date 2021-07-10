from flask import Flask
from flask_restx import Api, Resource

from src.server.instance import server
from src.service.CalculatorService import CalculatorService

app, api = server.app, server.api

@api.route('/calculator')
class Calculator(Resource):
    ## Classe representa o Rest Controller para o endpoint "/calculator"
    ## O metodo post() analogo do metodo http "post" extrai da requisição 
    ## a carga com os parametros de aresta e unidade e injeta na classe CalculatorService
    ## que retorna o metodo service()

    def post(self, ):
        return  CalculatorService(api.payload).service()