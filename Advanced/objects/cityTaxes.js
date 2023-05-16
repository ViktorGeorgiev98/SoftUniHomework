function cityTaxes(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
        }
    };
        return city;

}

let city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);city.collectTaxes;
console.log(city);
city.applyGrowth(5);
console.log(city);
city.applyRecession(10);
console.log(city);


