// THERE ARE 2 SOLUTIONS FOR THIS TASK, BOTH WORK FINE



//  functions
function solution() {
    let current = {
        string: '',
        append(text) {
            this.string += text;
        },
        removeStart(n) {
            this.string = this.string.substring(n);
            
        },
        removeEnd(n) {
            this.string = this.string.substring(0, this.string.length - n);
            
        },
        print() {
            console.log(this.string);
        }
    }

    return current;

}

//  second solution

// function solution() {
//     let status = '';

//     function append(string) {
//         status = status + string;
//     }

//     function removeStart(n) {
//         status = status.slice(n);   
//     }

//     function removeEnd(n) {
//         status = status.slice(0, -n);
//     }

//     function print() {
//         console.log(status)
//     }

//     return {
//         append,
//         removeStart,
//         removeEnd,
//         print
//     }
// }


//  input for testing
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();
secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
