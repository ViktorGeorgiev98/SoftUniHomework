function lowestPrices(input) {
    function createProduct(city, productName, price) {
        let product = {
            name: productName,
            city: city,
            price: price,
            checkPrice(currentPrice, currentCity) {
                if (this.price > currentPrice) {
                    this.price = currentPrice;
                    this.city = currentCity;
                }
            }
        };

        return product;
    }
    let final = new Map();
    for (let currentInfo of input) {
        let [city, productName, price] = currentInfo.split(' | ');
        if (!final.has(productName)) {
            let currentProduct = createProduct(city, productName, Number(price));
            final.set(productName, currentProduct);
        } else {
            let currentProduct = final.get(productName);
            currentProduct = currentProduct.checkPrice(price, city);
        }

    }

    for (let product of final.values()) {
        console.log(`${product.name} -> ${product.price} (${product.city})`);
    }
}

lowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);