function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0.0;
    // let fruitIsValid = true
    if (day == "Monday" 
    || day == "Tuesday" 
    || day == "Wednesday" 
    || day == "Thursday" 
    || day == "Friday") {
        if (fruit == "banana") {
            price = 2.50;
            // fruitIsValid == true
        } else if (fruit == "apple") {
            price = 1.20;
            // fruitIsValid == true
        } else if (fruit == "orange") {
            price = 0.85;
            // fruitIsValid == true
        } else if (fruit == "grapefruit") {
            price = 1.45;
            // fruitIsValid  == true
        } else if (fruit == "kiwi") {
            price = 2.70;
            // fruitIsValid = true
        } else if (fruit == "pineapple") {
            price = 5.50;
            // fruitIsValid == true
        } else if (fruit == "grapes") {
            price = 3.85
            // fruitIsValid == true
        } else {
            // fruitIsValid == false
            console.log("error");
        }   
    } else if (day == "Saturday" || day == "Sunday") {
        if (fruit == "banana") {
            price = 2.70;
            // fruitIsValid == true
        } else if (fruit == "apple") {
            price = 1.25;
            // fruitIsValid == true
        } else if (fruit == "orange") {
            price = 0.90;
            // fruitIsValid == true
        } else if (fruit == "grapefruit") {
            price = 1.60;
            // fruitIsValid == true
        } else if (fruit == "kiwi") {
            price = 3.00;
            // fruitIsValid == true
        } else if (fruit == "pineapple") {
            price = 5.60;
            // fruitIsValid == true
        } else if (fruit == "grapes") {
            price = 4.20;
            // fruitIsValid == true
        } else {
            // fruitIsValid == false
            console.log("error");
            
        }   
        
    } else {
        // fruitIsValid == false
        console.log("error");
        
    
        
        
    }
    let finalPrice = quantity * price;
    if (price > 0) {
        console.log(finalPrice.toFixed(2));
    // } else {
    //     console.log("error")
    // }
    
    // if(fruitIsValid == true) {
    //     let finalPrice = quantity * price
    //     console.log(finalPrice.toFixed(2))
    } 
      
}

