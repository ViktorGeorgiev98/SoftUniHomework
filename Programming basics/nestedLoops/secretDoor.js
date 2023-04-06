function secretDoor(input) {
    let upperStotica = Number(input[0]);
    let upperDesetica = Number(input[1]);
    let upperEdinica = Number(input[2]);
    let combinationIsValid = false;
    for (let stotici = 1; stotici <= upperStotica; stotici++) {
        for (let desetici = 1; desetici <= upperDesetica; desetici++) {
            for (let edinici = 1; edinici <= upperEdinica; edinici++) {
                if (stotici % 2 === 0) {
                    if (edinici % 2 === 0) {
                        if (desetici === 2 
                            || desetici === 3 
                            || desetici === 5
                            || desetici === 7) {
                             
                                // combinationIsValid = true;
                                console.log(`${stotici} ${desetici} ${edinici}`);
                                }
                        }
                    } 
                    // else {combinationIsValid = false};
                }
            }
        }
    }

secretDoor(["3", "5", "5"]);