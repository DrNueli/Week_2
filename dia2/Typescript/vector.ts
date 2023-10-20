//RETO 8

export class Vector {
    private elements: number[];

    constructor(public n: number, public k: number) {
        this.n = n;
        this.k = k;
        this.elements = [];
        
        for (let i = 0; i < n; i++) {
            this.elements.push(Math.floor(Math.random() * (k + 1)))
        }
    }

    public print(): void {
        for(let i = 0; i < this.elements.length; i++) {
            console.log(this.elements)
        }
    }

    public add(v1: Vector): Vector {
        let result = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements[i] = this.elements[i] + v1.elements[i]
        }
        return result
    }

    subs(v1: Vector): Vector {
        if (this.elements.length !== v1.elements.length) {
            console.log("Error: vectors are not of the same size.");
            return new Vector(0, 0);
        }
        const result = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements[i] = this.elements[i] - v1.elements[i]
        }
        return result
    }

    mult(v1: Vector): Vector {
        let result = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements[i] = this.elements[i] * v1.elements[i]
        }
        return result
    }

    multNumber(n: number): Vector {
        let result = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            result.elements[i] = this.elements[i] * n
        }
        return result
    }
}

let v = new Vector(5, 10);
v.print();

let v2 = new Vector(5, 10);
v2.print();

let sum = v.add(v2);
sum.print();

let diff = v.subs(v2);
diff.print();

let prod = v.mult(v2);
prod.print();

let num = 3;
let prodNum = v.multNumber(num);
prodNum.print();