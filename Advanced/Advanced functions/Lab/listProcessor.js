function solve(input) {
    function createProcessor() {
        let status = [];

        function add(str) {
            status.push(str);
        }

        function remove(str) {
           status = status.filter(el => el !== str);
        }

        function print() {
            console.log(status.join(','));
        }

        return {
            add,
            remove,
            print
        };
    }

    let processor = createProcessor();
    // for (let command of input) {
    //     let [currentCommand, value] = command.split(' ');
    //     processor[currentCommand](value)
    // }
    input.forEach(element => {
        let [command, value] = element.split(' ');
        processor[command](value);
        
    });
}


solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);