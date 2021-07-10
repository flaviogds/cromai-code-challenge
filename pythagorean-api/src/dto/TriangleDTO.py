import math

class TriangleDTO:
    def __init__(self, params):

        a = float(params["adjacent_leg"])
        b = float(params["opposite_leg"])
        c = float(params["hypotenuse"])
        self.unit = params["unit"]

        if(a is None and b and c is not None):
            self.adjacent_leg = math.sqrt(pow(c, 2) - pow(b, 2))
        else:
            self.adjacent_leg = a

        if(b is None and a and c is not None):
            self.opposite_leg = math.sqrt(pow(c, 2) - pow(a, 2))
        else:
            self.opposite_leg = b

        if(c is None and a and b is not None):
            self.hypotenuse = math.sqrt(pow(a, 2) + pow(b, 2))
        else:
            self.hypotenuse = c

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
            "retangle": self.phytagorean(),
            "innerAngles": self.innerAngles(),
            "perimeter": format(self.perimeter(), '.2f'),
            "area": format(self.area(), '.3f'),
            "unit": self.unit
        }