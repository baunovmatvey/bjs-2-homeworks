function parseCount(value) {
    const numberParse = Number.parseFloat(value);
    if(Number.isNaN(numberParse)) {
        throw new Error("Невалидное значение");
    }
    return numberParse;
}
function validateCount(value) {
    try {
        return parseCount(value);
    } catch(error) {
        return error;
    }
}
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if(a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area() {
        const {a, b, c} = this;
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - a) * (p - b) * (p-c));
        return parseFloat(area.toFixed(3));
    }
}
function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует"
            },
            get area() {
               return "Ошибка! Треугольник не существует" 
            }
        };
    }
}