from flask import Flask
from flask_restx import Api, Resource

from src.server.instance import server

app, api = server.app, server.api

@api.route('/status')
class Status(Resource):
    ## Classe representa o Rest Controller para o endpoint "/status"
    ## Endpoint utilizado para verificar o estado da aplicação
    ## Quando a aplicação esta online o metodo get analogo ao 
    ## metodo http "get" retorna o status 200 indicando que os 
    ## demais endpoints da aplicação podem ser utilizados

    def get(self, ):
        return "It's alive!!", 200