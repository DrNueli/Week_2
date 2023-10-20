// RETO 9

import { Vector } from "./vector";

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