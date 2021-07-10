from src.dto.TriangleDTO import TriangleDTO

class CalculatorService():
    ## Classe que representa o conjunto de serviços na aplicação
    ## O construtor recebe os parametros da requisição, com valor das arestas e unidade de medida
    ## e instancia um objeto do tipo TriangleDTO.
    ## O Metodo service() verifica se o objeto instanciado é um triangulo um dicionario representando as propriedades
    ## do objeto ou uma mensagem informando que o objeto não é um triangulo

    def __init__(self, params):
            self.object = TriangleDTO(params)

    def service(self):
        if(not self.object.isTriangle()):
           return {
               "triangle": False,
               "title": "Isso não parece exatamente um triângulo",
               "message": "Os valores das arestas não representam um triângulo, tente novamente."
           }
        else:
            return self.object.parse()