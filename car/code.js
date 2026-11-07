
// Define the Car object
function Car(make, model, year, color, horsepower) {

    // Five attributes
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.horsepower = horsepower;

    // Display method
    this.display = function() {

        return "<tr>" +
            "<td>" + this.make + "</td>" +
            "<td>" + this.model + "</td>" +
            "<td>" + this.year + "</td>" +
            "<td>" + this.color + "</td>" +
            "<td>" + this.horsepower + "</td>" +
            "</tr>";
    };
}

// Create an array of five Car objects
var cars = [

    new Car("Lotus", "Esprit", 2004, "Black", 350),

    new Car("Lamborghini", "Countach", 1990, "Black", 375),

    new Car("Lamborghini", "Diablo", 2001, "Red", 550),

    new Car("Ferrari", "Testarossa", 1996, "White", 390),

    new Car("Nissan", "300 ZX", 1996, "Red", 300)

];

// Display the cars in the HTML table
var output = "";

for (var i = 0; i < cars.length; i++) {

    output += cars[i].display();

}

// Place the results inside the table
document.getElementById("carTable").innerHTML = output;
