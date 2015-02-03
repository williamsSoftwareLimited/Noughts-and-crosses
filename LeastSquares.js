/* The least squares approximation builds a linear function based on approximate points.

Eg.
|                  X            4.1
|             X                 2.9
|        X                      2.1
|   X                           0.9
---------------------------> x
    1    2    3    4    
Where looking for a graph of the form y = mx + c
Therefore we need to solve the (many) simultaneous equations:
c +  m = 0.9
c + 2m = 2.1
c + 3m = 2.9
c + 4m = 4.1

We're going to measure the vertical distance from the imaginary straight line y = mx + c,
d_i = (c + mx_i) - y_i , (i=1,2,3,4)
We need to minimize: (d_1)^2 + (d_2)^2 + (d_3)^2 + (d_4)^2 (the squaring is to get rid of negatives)
In the example:
(d_1)^2 = ((c +  m) - 0.9)^2
(d_2)^2 = ((c + 2m) - 2.1)^2
(d_3)^2 = ((c + 3m) - 2.9)^2
(d_4)^2 = ((c + 4m) - 4.1)^2

The final simultaneous equations look like
c*n        + m*Sum(x_i)     = Sum(y_i)
c*Sum(x_i) + m*Sum([x_i]^2) = Sum([y_i]*[x_i])
where n is the number of points, and i = 1,2,...,n

Using a = Sum(x_i), b = Sum([x_i]^2), d = Sum(y_i) and e = Sum([y_i]*[x_i]) then,
to get a solution for m then
cn + ma  = d  (1)
ca + mb  = e  (2)

the equation (2) becomes
c = (e - mb)/a (3)
--------------
c = e/a - mb/a 

Substituting c into (1)
ne/a - nmb/a + ma = d
-nmb/a + ma = d - ne/a
m(a - nb/a) = d - ne/a
m = (d - ne/a)/(a - nb/a) (4)
-------------------------

Testing using example above,
 a = 10, b = 30, d = 10 e = 30.2, and n = 4

 m = (10 - 4*30.2/10)/(10 - 4*30/10) = -2.08/-2 = 1.04 (Correct!)

 Using (3) to get c then
 c = (30.2 - 1.04*30)/10 = -0.1 (Correct!)

 Therefore my approximate linear function is y = 1.04x - 0.1

*/
 
// the class (ish) that'll contain all the calculations for the least square approximation
leastSquares = function () {
    // the invariants are the list of points, they should be (x, y) coordinate pairs
    this.pointsList = []; // initialise the array
    this.sumX = 0.0;
    this.sumY = 0.0;
    this.sumXSquared = 0.0;
    this.sumXTimesY = 0.0;
    this.gradient = 0.0;
    this.constant = 0.0;

    this.addPoint = function (_x, _y) {
        var n = this.pointsList.length;
        // invariant x, y exist in Reals and n >= 0

        this.pointsList[n] = { x: _x, y: _y };
        this.calcSums();
    }

    this.calcGradient = function () {
        var n = this.pointsList.length;
        // invariant n >=0

        this.gradient = (this.sumY - n * this.sumXTimesY / this.sumX) / (this.sumX - n * this.sumXSquared / this.sumX);
        return this.gradient;
    }
    this.calcConstant = function () {
        var n = this.pointsList.length;
        // invariant n >= 0 and gradient has been calculated and sumX > 0

        this.constant = (this.sumXTimesY - this.gradient * this.sumXSquared) / this.sumX;
        return this.constant;
    }

    this.calcSums = function () {
        // invariant n >=0
        this.sumX = 0.0;
        this.sumY = 0.0;
        this.sumXSquared = 0.0;
        this.sumXTimesY = 0.0;

        for (n = 0; n < this.pointsList.length; n++) {
            this.sumX += this.pointsList[n].x;
            this.sumY += this.pointsList[n].y;
            this.sumXSquared += Math.pow(this.pointsList[n].x, 2);
            this.sumXTimesY += this.pointsList[n].x * this.pointsList[n].y;
        }
    }
}

//_leastSquares = new leastSquares();
//_leastSquares.addPoint(1, 0.9);
//_leastSquares.addPoint(2, 2.1);
//_leastSquares.addPoint(3, 4.9);
//_leastSquares.addPoint(4, 4.1);
//console.log("The sum of x is " + _leastSquares.sumX);
//console.log("The sum of y is " + _leastSquares.sumY);
//console.log("The sum of x^2 is " + _leastSquares.sumXSquared);
//console.log("The sum of x*y is " + _leastSquares.sumXTimesY);
//console.log("The gradient is " + _leastSquares.calcGradient());
//console.log("The constant is " + _leastSquares.calcConstant());
