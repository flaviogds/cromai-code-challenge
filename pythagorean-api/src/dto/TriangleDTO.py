import math

class TriangleDTO:
    ##Classe que representa o objeto Triangulo submetido pelo usuario
    ##O construtur recebe os parametros das arestas e unidades e preenche as lacunas segundo as regras
    ## 1 - 1 parametro faltante, a hipotenusa assumo o maior valor entre os dois parametros passados e obtem-se o terceira
    ## utilizando o teorema de pitagoras
    ## 2 - 2 parametros faltantes, são substituidos por 0 e construido o objeto com a propriedade triangle = false
    ## O metodo isTriangle() retrona um boleano indicando se o objeto criado é ou não um triangulo
    ## O metodo phytagorean() retorna um boleano indicando se o objeto é ou não um triangulo retangulo
    ## O metodo perimeter(), area(), innerAngle() retorna respectivamente o perimetro, a area e os angulos internos do triangulo
    ## O metodo parse() retorna um dicionario com os valores das propriedades do objeto

    def __init__(self, params):

        a = params["adjacent_leg"]
        b = params["opposite_leg"]
        c = params["hypotenuse"]
        self.unit = params["unit"]

        if(a is None):
            if(b is None or c is None):
                self.adjacent_leg = 0 
            else:
                self.adjacent_leg = math.sqrt(float(c)**2 - float(b)**2)
        else:
            self.adjacent_leg = float(a)

        if(b is None):
            if(a is None or c is None):
                self.opposite_leg = 0
            else:
                self.opposite_leg = math.sqrt(float(c)**2 - float(a)**2)
        else:
            self.opposite_leg = float(b)

        if(c is None):
            if(a is None or b is None):
                self.hypotenuse = 0
            else:
                self.hypotenuse = math.sqrt(float(a)**2 + float(b)**2)
        else:
            self.hypotenuse = float(c)
        
        print(self.adjacent_leg, self.opposite_leg, self.hypotenuse)
        
    def isTriangle(self):
        if(abs(self.opposite_leg - self.hypotenuse) < self.adjacent_leg < (self.opposite_leg + self.hypotenuse)
            and abs(self.adjacent_leg - self.hypotenuse) < self.opposite_leg < (self.adjacent_leg + self.hypotenuse)
            and abs(self.adjacent_leg - self.opposite_leg) < self.hypotenuse < (self.adjacent_leg + self.opposite_leg)):
            return True
        else:
            return False

    def phytagorean(self):
        if(self.hypotenuse == math.sqrt(pow(self.adjacent_leg, 2) + pow(self.opposite_leg, 2))):
            return True
        else:
            return False

    def innerAngles(self):
        if(self.isTriangle()):
            a = self.adjacent_leg
            b = self.opposite_leg
            c = self.hypotenuse

            return {
                "a": format(math.acos((b**2 + c**2 - a**2)/(2*b*c))*180/math.pi, '.2f'),
                "b": format(math.acos((a**2 + c**2 - b**2)/(2*a*c))*180/math.pi, '.2f'),
                "c": format(math.acos((a**2 + b**2 - c**2)/(2*a*b))*180/math.pi, '.2f')
            }
        else:
            return False
    
    def perimeter(self):
        if(self.isTriangle()):
            return (self.adjacent_leg + self.opposite_leg + self.hypotenuse)
        else:
            return False

    def area(self):
        if(self.isTriangle()):
            s = self.perimeter()/2
            return math.sqrt(s*(s-self.adjacent_leg)*(s-self.opposite_leg)*(s-self.hypotenuse))
        else:
            return False

    def parse(self):    
        return {
            "edges":
            {
                "adjacent_leg": format(self.adjacent_leg, '.2f'),
                "opposite_leg": format(self.opposite_leg, '.2f'),
                "hypotenuse": format(self.hypotenuse, '.2f')
            },
            "triangle": self.isTriangle(),
            "retangle": self.phytagorean(),
            "innerAngles": self.innerAngles(),
            "perimeter": format(self.perimeter(), '.2f'),
            "area": format(self.area(), '.3f'),
            "unit": self.unit
        }