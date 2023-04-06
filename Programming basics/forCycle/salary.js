function salary(input) {
    let numberOfTabsOpened = Number(input[0]);
    let salary = Number(input[1]);
    for (i = 2; i <= numberOfTabsOpened + 1; i++) {
        let currentTab = input[i];
        if ( currentTab == "Facebook") {
            salary -= 150;
        } else if (currentTab == "Instagram") {
            salary -= 100;
        } else if (currentTab == "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.")
            break;
            
        }
     
    }
    if (salary > 0) {
        console.log(`${Math.trunc(salary)}`)
    }
    // if (salary <= 0) {
    //     console.log("You have lost your salary.")
    // } else {
    //     console.log(`${Math.trunc(salary)}`)
    // }

    
    // console.log(`${Math.trunc(salary)}`)
}
salary(["10",

"750",

"Facebook",

"Dev.bg",

"Instagram",

"Facebook",

"Reddit",

"Facebook",

"Facebook"])