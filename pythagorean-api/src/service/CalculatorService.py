from src.dto.TriangleDTO import TriangleDTO

class CalculatorService():

    def __init__(self, params):
            self.object = TriangleDTO(params)

    def service(self):
        if(not self.object.isTriangle()):
           return {
               "title": "Isso não parece exatamente um triangulo",
               "message": "Os valores das arestas não representam um triangulo, tente novamente"
           }
        else:
            return self.object.parse()